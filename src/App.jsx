import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './App.css'
import Allroutes from './Router/Allroutes'
import WhatsAppFloat from './Components/WhatsAppFloat'

const sectionIdByPath = {
  '/': null,
  '/about': 'about',
  '/portfolio': 'portfolio',
  '/services': 'services',
  '/testimonials': 'testimonials',
  '/contact': 'contact',
}

const App = () => {
  const { pathname, key } = useLocation()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const sectionId = sectionIdByPath[path]

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [pathname, key])

  return (
    <>
      <Allroutes />
      <WhatsAppFloat />
    </>
  )
}

export default App
