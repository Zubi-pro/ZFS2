import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title}) => {
  return (
    <button style={{
        "backgroundColor": "#2E994D",
        "color": "white",
        "border": "none",
        "borderRadius" : "4px",
        "padding" : "15px 25px"
    }}>
      <Link to="/contact" style={{
        "color" : "inherit"
      }}>{title}</Link>
      </button>
  )
}

export default Button