import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function ButtonBuy() {
  return (
    <div className='btn-product'>
      <Link className='btn-buy' to='/'>
        Buy
      </Link>
    </div>
  )
}
