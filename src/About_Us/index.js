import React from 'react'
import { Col, Row} from 'reactstrap'
import image_2 from '../assets/Image/image_2.png'
import icon_sevice_item from '../assets/Image/icon-service-item.png'
import './index.css'

export default function AboutUs() {
  return (
    <div className='about container'>
        <h1>
            About <span>us</span>
        </h1>
        <Row className='conten'>
            <Col>
                <img src={image_2} alt=""/>
            </Col>
            <Col>
            <p>
            Fre<span>Green</span>. is the supply and direct sale of vegetable products,<br/>
            fresh fruits. We prioritize product protection so that it remains<br/>
            fresh, with quality and ease of transactions, so that the<br/>
            product shopping experience becomes more comfortable and<br/>
            fresh. Our address is in Makassar, Sulawesi Selatan, Indonesia
            </p>
            <p>Our Service</p>
            <p><img src={icon_sevice_item} alt=""/> Provide quality agricultural processes and products.</p>
            <p><img src={icon_sevice_item} alt=""/> Providing the best service to consumers.</p>
            <p><img src={icon_sevice_item} alt=""/> Maintain product freshness</p>
            </Col>
        </Row>
    </div>
  )
}
