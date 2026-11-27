import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import CircularTextReveal from '../Components/CircularTextReveal'
import marriage from "../assets/marriage.jpg";
import '../assets/styles/about.css'

const aboutContainerVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delayChildren: 0.08, staggerChildren: 0.1 },
  },
}

const aboutItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

const About = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <div className="about_section">
        <div className="row about">
          <motion.div
            className="col-sm-12 col-md-6 col-lg-5 img-section"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={marriage} alt="no-img" loading="lazy" decoding="async" />
          </motion.div>
          <motion.div
            className="col-sm-12 col-md-6 col-lg-7 text-section"
            variants={aboutContainerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CircularTextReveal as="h2" className="section-title" variants={aboutItemVariants}>
              More than photographs <br />
              - memories that <br /> stay with you
            </CircularTextReveal>
            <motion.p variants={aboutItemVariants}>I believe in capturing the quiet spaces between the grand moments. My approach blends editorial elegance with candid authenticity, resulting in images that feel both beautifully composed and profoundly real.</motion.p>

            <motion.div variants={aboutItemVariants}>
              <h4>✧ Personalized Experience</h4>
              <p>Every session is tailored to your unique story, ensuring you feel comfortable and completely yourself.</p>
            </motion.div>
            <motion.div variants={aboutItemVariants}>
              <h4>▣ Natural & Candid Direction</h4>
              <p>I gently guide rather than stiffly pose, allowing genuine emotion and authentic connections to shine through.</p>
            </motion.div>
            <motion.div variants={aboutItemVariants}>
              <h4>☷ Timeless Editing</h4>
              <p>My signature editing style favors natural, true-to-life colors that will look as beautiful in fifty years as they do today.</p>
            </motion.div>

            <motion.hr variants={aboutItemVariants} />

            <motion.h4 variants={aboutItemVariants}>Aurelia</motion.h4>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About
