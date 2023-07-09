import React from 'react'
import {Card,
Row,
Col,
CardSubtitle,
CardTitle,
CardText,
} from 'reactstrap'
import image_8 from '../../assets/Image/image_8.png'
import image_9 from '../../assets/Image/image_9.png'
import image_10 from '../../assets/Image/image_10.png'
import image_11 from '../../assets/Image/image_11.png'

export default function CardTestimoni() {
  return (
    <div className='container'>
      <Row>
  <Col xs="3">
    <Card body>
      <Row xs='1'>
        <Col>
          <Row>
            <Col xs='3'>
              <img src={image_8} alt=""/>
            </Col>
            <Col>
              <CardTitle style={{ color:'#01261F',fontFamily:'Roboto', fontWeight:'500', fontSize:'18px'}} tag="h5">Caroline </CardTitle>
              <CardSubtitle style={{color:'#C4C4C4',fontFamily:'Roboto', fontWeight:'300', fontSize:'14px'}}>Product Manager</CardSubtitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <CardText style={{paddingTop:'10px', color:'#465E59', textAlign:'left', fontFamily:'Roboto', fontWeight:'400', fontSize:'14px'}}>
            “Buah yang datang masih terjaga kesegarannya”
          </CardText>
        </Col>
      </Row>
    </Card>
  </Col>
  <Col xs="3">
    <Card body>
      <Row xs='1'>
        <Col>
          <Row>
            <Col xs='3'>
              <img src={image_9} alt=""/>
            </Col>
            <Col>
              <CardTitle style={{ color:'#01261F',fontFamily:'Roboto', fontWeight:'500', fontSize:'18px'}} tag="h5">Edward </CardTitle>
              <CardSubtitle style={{color:'#C4C4C4',fontFamily:'Roboto', fontWeight:'300', fontSize:'14px'}}>Wiraswasta</CardSubtitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <CardText style={{paddingTop:'10px', color:'#465E59', textAlign:'left', fontFamily:'Roboto', fontWeight:'400', fontSize:'14px'}}>
          “Produk yang dijual sangat-sangat segar karena langsung dari kebun”
          </CardText>
        </Col>
      </Row>
    </Card>
  </Col>
  <Col xs="3">
    <Card body>
      <Row xs='1'>
        <Col>
          <Row>
            <Col xs='3'>
              <img src={image_10} alt=""/>
            </Col>
            <Col>
              <CardTitle style={{ color:'#01261F',fontFamily:'Roboto', fontWeight:'500', fontSize:'18px'}} tag="h5">Hermawan </CardTitle>
              <CardSubtitle style={{color:'#C4C4C4',fontFamily:'Roboto', fontWeight:'300', fontSize:'14px'}}>Wiraswasta</CardSubtitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <CardText style={{paddingTop:'10px', color:'#465E59', textAlign:'left', fontFamily:'Roboto', fontWeight:'400', fontSize:'14px'}}>
          “Harga murah dengan kualitas sayur yang sangat baik”
          </CardText>
        </Col>
      </Row>
    </Card>
  </Col>
  <Col xs="3">
    <Card body>
      <Row xs='1'>
        <Col>
          <Row>
            <Col xs='3'>
              <img src={image_11} alt=""/>
            </Col>
            <Col>
              <CardTitle style={{ color:'#01261F',fontFamily:'Roboto', fontWeight:'500', fontSize:'18px'}} tag="h5">John </CardTitle>
              <CardSubtitle style={{color:'#C4C4C4',fontFamily:'Roboto', fontWeight:'300', fontSize:'14px'}}>Software Engineer</CardSubtitle>
            </Col>
          </Row>
        </Col>
        <Col>
          <CardText style={{paddingTop:'10px', color:'#465E59', textAlign:'left', fontFamily:'Roboto', fontWeight:'400', fontSize:'14px'}}>
          “Saya lebih suka berlangganan dengan FreGreen karena produk yang segar”
          </CardText>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>
    </div>
  )
}
