import React from 'react'
import './CustomInput.scss'

export default function CustomInput({ type, style, placeholder }) {
  return (
    <div className='CustomInput'>
      <input type={type ? type : 'text'} placeholder={placeholder} style={style} />
    </div>
  )
}
