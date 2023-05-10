import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import logo from '../../assets/img/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
        <Col>
        <div className="about__footer">
          <h3>Tap Cash</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reiciendis odio dolor quo delectus ex!</p>
        </div>
        </Col>
        <Col>
        <div className="content__help text-center">
          <h3>Help</h3>
          <p>Support</p>
          <p>Guide</p>
          <p>Report</p>
          <p>Q & A</p>
        </div>
        </Col>
        <Col>
        <div className="contact text-center">
          <div className="icon">  
          <span><i class="ri-facebook-fill facebook"></i></span>
          <span><i class="ri-instagram-fill instagram"></i></span>
          <span><i class="ri-google-fill google"></i></span>
          </div>
        </div>
        </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
