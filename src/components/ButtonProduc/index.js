import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function ButtonProduct() {
  return (
    <div className='btn-product'>
      <Link className='bt' to='/'>
        Our Product
      </Link>
    </div>
  )
}
