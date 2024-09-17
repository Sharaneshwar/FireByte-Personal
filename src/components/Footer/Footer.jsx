import React from 'react'
import './Footer.css'

const Footer = ({ fixed }) => {
  return (
    <div className={fixed === 'fixed' ? 'footer-container fixed' : (fixed === 'productsFixed' ? 'footer-container productsFixed' : 'footer-container')}>
      <span>Copyright © 2024 FireByte Technologies - All Rights Reserved.</span>
      <span>Contact: <a href="mailto:support@firebyte.in">support@firebyte.in</a></span>
    </div>
  )
}

export default Footer
