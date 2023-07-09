import React from 'react'
import './index.css'
import Card from '../components/Card'

export default function OurProduct() {
  return (
    <div>
        <h1><span>Our</span> Product</h1>
        <p>“Our process is doing the delivery to the consumer”</p>
        <Card color='light' outline='false' inverse='False' body='false' />
    </div>
  )
}
