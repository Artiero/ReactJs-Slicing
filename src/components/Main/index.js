import React from 'react'
import { Col, Row} from 'reactstrap'
import image_1 from '../../assets/Image/image_1.png'
import ButtonProduct from '../ButtonProduc'
import Icon from '../Icon'
import './index.css'

export default function Main() {
  return (
    <div className='header container-xl' >
        <Row>
            <Col xs='6'>
            <h1>
            <span>Shop</span> at our store,<br/> 
            get a <span>fresh product</span> <br/> 
            from the field
            </h1>
            <p>we sell products that are still fresh from our plantations,<br/>
            and we maintain the quality of the products we sell to<br/>
            maintain customer trust</p>
            <ButtonProduct/>
            <Icon/>
            </Col>
            <Col >
            <img src={image_1} className='image-main' alt=""/>
            </Col>
            
        </Row>
    </div>
  )
}
