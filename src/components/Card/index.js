import React from 'react'
import image_3 from '../../assets/Image/image_3.png'
import image_4 from '../../assets/Image/image_4.png'
import image_5 from '../../assets/Image/image_5.png'
import image_6 from '../../assets/Image/image_6.png'
import './index.css'
import ButtonBuy from '../ButtonBuy'
import {Card,
Row,
Col,
CardBody,
CardSubtitle,
CardTitle,
CardText,
Button
} from 'reactstrap'

export default function CardTestimoni() {
  return (
    <div className='container'>
      <Row style={{paddingTop:'20px'}}>
          <Col style={{paddingTop:'20px'}}>
          <Card body color="dark" outline style={{ width: '18rem'}}>
        <img style={{borderRadius:'10px'}} alt="Sample" src={image_3} className='image_3' />
          <CardBody>
            <CardTitle style={{textAlign:'center', color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'22px'}} tag="h5">
              Carrot
            </CardTitle>
            <CardText style={{fontFamily:'Roboto', color:'#C4C4C4', fontWeight:'300', fontSize:'14px', textAlign:'justify'}}>
              Vegetables with the best quality and fresh that are still maintained until they reach consumers
            </CardText>
            <CardSubtitle style={{color:'#1E9153', textAlign:'center', fontFamily:'Roboto', fontWeight:'500', fontSize:'20px'}}
              className="mb-2"
              tag="h6">Rp. 13.000,- <span style={{color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'16px'}}> / kg</span></CardSubtitle>
            <ButtonBuy/>
          </CardBody>
      </Card>
          </Col>
          <Col style={{paddingTop:'20px'}}>
          <Card body color="dark" outline style={{ width: '18rem'}}>
        <img style={{borderRadius:'10px'}} alt="Sample" src={image_4} className='image_4' />
          <CardBody>
            <CardTitle style={{textAlign:'center', color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'22px'}} tag="h5">
            Apple
            </CardTitle>
            <CardText style={{fontFamily:'Roboto', color:'#C4C4C4', fontWeight:'300', fontSize:'14px', textAlign:'justify'}}>
            Fruit with the best quality and fresh that is still maintained until it reaches the consumer
            </CardText>
            <CardSubtitle style={{color:'#1E9153', textAlign:'center', fontFamily:'Roboto', fontWeight:'500', fontSize:'20px'}}
              className="mb-2"
              tag="h6">Rp. 65.000,- <span style={{color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'16px'}}> / kg</span></CardSubtitle>
            <ButtonBuy/>
          </CardBody>
          </Card>
          </Col>
          <Col style={{paddingTop:'20px'}}>
          <Card body color="dark" outline style={{ width: '18rem'}}>
        <img style={{borderRadius:'10px'}} alt="Sample" src={image_6} className='image_5' />
          <CardBody>
            <CardTitle style={{textAlign:'center', color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'22px'}} tag="h5">
            Potato
            </CardTitle>
            <CardText style={{fontFamily:'Roboto', color:'#C4C4C4', fontWeight:'300', fontSize:'14px', textAlign:'justify'}}>
            Vegetables with the best quality and fresh that are still maintained until they reach consumers
            </CardText>
            <CardSubtitle style={{color:'#1E9153', textAlign:'center', fontFamily:'Roboto', fontWeight:'500', fontSize:'20px'}}
              className="mb-2"
              tag="h6">Rp. 13.000,- <span style={{color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'16px'}}> / kg</span></CardSubtitle>
            <ButtonBuy/>
          </CardBody>
      </Card>
          </Col>
          <Col style={{paddingTop:'20px'}}>
          <Card body color="dark" outline style={{ width: '18rem'}}>
        <img style={{borderRadius:'10px'}} alt="Sample" src={image_5} className='image_5' />
          <CardBody>
            <CardTitle style={{textAlign:'center', color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'22px'}} tag="h5">
            Tomato
            </CardTitle>
            <CardText style={{fontFamily:'Roboto', color:'#C4C4C4', fontWeight:'300', fontSize:'14px', textAlign:'justify'}}>
            Vegetables with the best quality and fresh that are still maintained until they reach consumers
            </CardText>
            <CardSubtitle style={{color:'#1E9153', textAlign:'center', fontFamily:'Roboto', fontWeight:'500', fontSize:'20px'}}
              className="mb-2"
              tag="h6">Rp. 13.000,- <span style={{color:'#01261F', fontFamily:'Roboto', fontWeight:'500', fontSize:'16px'}}> / kg</span></CardSubtitle>
            <ButtonBuy/>
          </CardBody>
      </Card>
          </Col>
      </Row>
    </div>
  )
}
