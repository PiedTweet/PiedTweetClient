import React from 'react'
import './CustomButton.scss'

export default function CustomButton({ text, background, onClick, style }) {
  return (
    <button className='CustomButton' style={style} onClick={onClick} type='button'>
      {text}
    </button>
  )
}
