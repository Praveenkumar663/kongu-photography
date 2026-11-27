import React, { useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'
import './circular-text-reveal.css'

const springOptions = { stiffness: 520, damping: 46, mass: 0.22 }

const CircularTextReveal = ({ as = 'span', children, className = '', ...props }) => {
  const MotionElement = motion[as] || motion.span
  const elementRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const lensX = useSpring(pointerX, springOptions)
  const lensY = useSpring(pointerY, springOptions)
  const radius = useSpring(0, { stiffness: 420, damping: 36 })
  const clipPath = useMotionTemplate`circle(${radius}px at ${lensX}px ${lensY}px)`

  const updatePosition = (event) => {
    const bounds = elementRef.current?.getBoundingClientRect()
    if (!bounds) return

    pointerX.set(event.clientX - bounds.left)
    pointerY.set(event.clientY - bounds.top)
  }

  const handlePointerEnter = (event) => {
    if (
      shouldReduceMotion ||
      event.pointerType !== 'mouse' ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return

    updatePosition(event)
    setIsActive(true)
    radius.set(72)
  }

  const handlePointerMove = (event) => {
    if (isActive) updatePosition(event)
  }

  const handlePointerLeave = () => {
    setIsActive(false)
    radius.set(0)
  }

  return (
    <MotionElement
      {...props}
      ref={elementRef}
      className={`circular-text-reveal ${className}`.trim()}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="circular-text-reveal__original">{children}</span>
      <motion.span
        className="circular-text-reveal__highlight"
        style={{ clipPath }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      <motion.span
        className="circular-text-reveal__lens"
        style={{
          left: lensX,
          top: lensY,
          scale: isActive ? 1 : 0.82,
          opacity: isActive ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </MotionElement>
  )
}

export default CircularTextReveal