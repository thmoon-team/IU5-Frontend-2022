import React from 'react'
import eTasker from './icons/eTasker.png'

const Navbar = () => {
  const className = 'nav-bar'
  return (
    <div className={className}>
      <img src={eTasker} height="100%"></img>
    </div>
  )
}

export default Navbar
