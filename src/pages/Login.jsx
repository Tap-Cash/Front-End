import React from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/Login.css'
import qr from '../assets/img/qr.png'
import Helmet from '../components/Helmet/Helmet'

const Login = () => {
    return (
        <Helmet title='login'>
        <section className='login'>
            <Container>
                <Row>
                    <div className="box__login">
                    <Col>
                    <h3 className='text-center pb-4'>Welcome back!</h3>
                    <Form className='auth__form'>

                        <FormGroup className='form__group'>
                            <p>Phone Number</p>
                            <input type="number" />
                        </FormGroup>

                        <FormGroup className='form__group'>
                            <p>Password</p>
                            <input type="password" />
                        </FormGroup>
                        <button type='submit' className='sub__btn'>Log In</button>
                        <p style={{fontWeight:400, color: 'rgb(156, 154, 154)'}}>
                            Need an accout?
                            <Link style={{ textDecoration: 'none' }} to='/signup'> Register</Link>
                        </p>
                    </Form>
                    </Col>
                    <Col>
                    <div className="qr text-center">
                    <img src={qr} alt="" />
                    <h4>Log in with QR Code</h4>
                    <p>Scan this with the TapCash mobile <br /> app to log in instantly</p>
                    </div>
                    </Col>
                    </div>
                </Row>
            </Container>
        </section>
        </Helmet>
    )
}

export default Login
