import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/wa.css'

function WhatsAppFloatingButton() {
  return (
    <div className="whatsapp-floating-button">
      <a href="https://wa.me/+19294311882" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
    </div>
  );
}

export default WhatsAppFloatingButton;
