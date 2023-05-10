import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col} from 'reactstrap'
import { motion } from 'framer-motion'
import '../style/Home.css'

// images 
import heroImg from '../assets/img/heroImg.png' 
import logo from '../assets/img/logo.png'
import payment from '../assets/img/payment.png'
import other from '../assets/img/other-01.png'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Helmet title='Home'>
        <Header />
        <section className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>Easy Banking <br /> <span>With TapCash</span> </h2>
                        <p>An account that's right for your business, more affordable, and convenient. Enjoy access to digital banking, support from our dedicated business advisors and a wide ATM network.</p>
                        <Link to="/login">
                        <motion.button whileHover={{translateY:'-10px'}}>Open in your browser</motion.button>
                        </Link>
                        <motion.button className='sec__btn'whileHover={{translateY:'-10px'}} >Download App</motion.button>
                    </div>
                    </Col>
                    <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='aboutUs'>
            <Container >
                <Row>
                    <Col>
                    <div className='about__img'>
                        <img src={logo} alt="" />
                    </div>
                    </Col>
                    <Col>
                    <div className="about__content">
                        <h2>Find Out A Little More <br /> <span>About Us</span> </h2>
                        <p>WE are a company dediceted to the distribution of products by delivery to your home or to the place where you are, with teh best quality of delevery</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='services'>
            <Container>
                <Row>
                    <div className='text-center services__content'>
                        <h2>Some Services We Offer</h2>
                        <p>With our app you can view the route of your order, from our local <br /> headquartes to the place where you are, look for the app now!</p>
                    </div>
                </Row>
                <Row>
                    <Col>
                    <div className="payment">
                    <img src={payment} alt="" />
                    <div className="content__payment">
                    <h4>Payment Done</h4>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sunt, debitis?</p>
                    </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="content">
                    <img src={other} alt="" />
                    <div className="content__find">
                    <h4>Find What u looking for</h4>
                    <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.</p>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />
        </Helmet>
    )
}

export default Home
