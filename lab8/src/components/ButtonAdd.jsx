import React, { useState } from 'react'
import plus_icon from './icons/plus_icon.png'

const ButtondAdd = (props) => {
  const className = 'button-add'
  return (
    <div>
      <button
        className={className}
        onClick={() => {
          props.addInput()
        }}
      >
        <img src={plus_icon} height="90%"></img>
        Добавить задачу
      </button>
    </div>
  )
}

export default ButtondAdd
