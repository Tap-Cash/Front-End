import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <Helmet title="signup">
            <section className='login'>
            <Container>
                <Row>
                    <Col>
                    <h3 className='text-center'>Welcome back!</h3>
                    <Form className='auth__form'>

                        <FormGroup className='form__group'>
                            <p>First Name</p>
                            <input type="text" />
                        </FormGroup>

                        <FormGroup className='form__group'>
                            <p>Last Name</p>
                            <input type="text" />
                        </FormGroup>

                        <FormGroup className='form__group'>
                            <p>Username</p>
                            <input type="email" />
                        </FormGroup>


                        <FormGroup className='form__group'>
                            <p>Phone Number</p>
                            <input type="number" />
                        </FormGroup>


                        <FormGroup className='form__group'>
                            <p>Email</p>
                            <input type="email" />
                        </FormGroup>

                        <FormGroup className='form__group'>
                            <p>Password</p>
                            <input type="password" />
                        </FormGroup>

                        <FormGroup className='form__group'>
                            <p>National ID</p>
                            <input type="number" />
                        </FormGroup>
                        
                        <FormGroup className='form__group'>
                            <p></p>
                            <input type="file" />
                        </FormGroup>

                        <button type='submit' className='sub__btn'>Log In</button>
                        <p style={{fontWeight:400, color: 'rgb(156, 154, 154)'}}>
                        Already have an account?
                            <Link style={{ textDecoration: 'none' }} to='/signup'>Login</Link>
                        </p>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </section>
        </Helmet>
    )
}

export default SignUp
