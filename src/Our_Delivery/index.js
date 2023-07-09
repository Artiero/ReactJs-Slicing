import React from 'react'
import './index.css'
import {Row, Col} from 'reactstrap'
import iconInformation from '../assets/Image/icon-information.png'
import iconOrder from '../assets/Image/icon-order.png'
import iconDelivery from '../assets/Image/icon-delivery.png'


export default function OurDelivery() {
  return (
    <div>
        <h1><span>Our</span> Delivery</h1>
        <p>“Our process is doing the delivery to the<br/>consumer”</p>
        <div className='contens container'>
        <Row>
            <Col style={{paddingTop:'50px'}}>
                <Row>
                    <Col>
                        <h1><img src={iconInformation} className='imgIconInformation' alt=""/><br/>Registration</h1>
                        <p>Register your account data to be<br/>able to make transactions on our<br/>products</p>
                    </Col>
                    <Col>
                        <h1><img src={iconOrder} className='imgIconOrder' alt=""/><br/>Make your order</h1>
                        <p>Choose the products we offer and<br/>make payments with the payment<br/>methods we offer.</p>
                    </Col>
                    <Col>
                        <h1><img src={iconDelivery} className='imgIconDelivery' alt=""/><br/>Delivery</h1>
                        <p>We will deliver the order according<br/>to the delivery address quickly and<br/>maintain the<br/>freshness of the product.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
    </div>
  )
}
