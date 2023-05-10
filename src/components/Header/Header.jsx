import React from 'react'
import './Header.css'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


import logo from '../../assets/img/logo.png'


const Header = () => {
    return (
        <header className='header'>
            <Container>
                        <Row>
                            <div className="nav__wrapper">
                                <div className="logo">
                                    <img src={logo} alt="" />
                                    <h1>TapCash</h1>
                                </div>
                                <div className="navigation">
                                    <ul className="menu">
                                        <li className="nav__item">Download</li>
                                        <li className="nav__item">Payments</li>
                                        <li className="nav__item">Features</li>
                                        <li className="nav__item">Support</li>
                                    </ul>
                                </div>
                                <div className="nav__login">
                                    <Link to="/login">
                                    <motion.button whileHover={{scale:1.05}} >Login</motion.button>
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </Container>
        </header>
    )
}

export default Header
