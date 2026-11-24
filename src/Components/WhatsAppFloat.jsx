import React from 'react'
import './whatsapp-float.css'

const WHATSAPP_BUSINESS_URL = 'https://wa.me/919865103599'

const WhatsAppFloat = () => (
  <a
    className="whatsapp-float"
    href={WHATSAPP_BUSINESS_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <i className="bi bi-whatsapp" aria-hidden="true" />
  </a>
)

export default WhatsAppFloat
