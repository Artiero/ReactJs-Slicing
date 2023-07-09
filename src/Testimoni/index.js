import React from 'react'
import './index.css'
import CardTestimoni from '../components/CardTestimoni'

export default function Testimoni() {
  return (
    <div style={{paddingBottom:'135px'}}>
      <h1>Testimonials</h1>
        <p>“Our process is doing the delivery to the<br/>consumer”</p>
        <CardTestimoni color='dark' outline='true' inverse='false' body='true' />
    </div>
  )
}
