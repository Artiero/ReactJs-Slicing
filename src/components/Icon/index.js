import React from 'react'
import { Col, Row} from 'reactstrap'
import icon_produc from '../../assets/Image/icon-product.png'
import icon_costomer from '../../assets/Image/icon-customer.png'
import icont_category from '../../assets/Image/icon-category.png'

export default function Icon() {
  return (
    <div>
        <Row >
                <Col style={{paddingTop:'35px'}}>
                    <Row>
                        <Col>
                        <img src={icon_produc} className='icon' alt=""/>
                        <p>
                            20+ Product
                        </p>
                        </Col>
                        <Col>
                        <img src={icon_costomer} className='icon' alt=""/>
                        <p>
                            100+ Customer
                        </p>
                        </Col>
                        <Col>
                        <img src={icont_category} className='icon' alt=""/>
                        <p>
                            5+ Category
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </div>
  )
}
