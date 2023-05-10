import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Container>
                <Row>
                    <Col>
                        <div className="side__wrapper">
                            <div className="side__name">
                                <h3>TapCash</h3>
                                <p>MAIN PAGES</p>
                            </div>
                            <div className="side__menu">
                                <ul>
                                    <li ><Link to='/dashboard' className='this'><i class="ri-home-4-line"></i> Dashboard</Link></li>
                                    <li><Link to='/subaccount' ><i class="ri-group-line"></i>SubAccount</Link></li>
                                    <li><Link to='/transaction'><i class="ri-money-dollar-circle-line"></i> Transaction</Link></li>
                                    <li><Link to='/customerservice'><i class="ri-customer-service-2-line"></i>Customer Service</Link></li>
                                </ul>
                            </div>
                            <div className="hide__pannel">
                                <button><i   class="ri-arrow-left-s-line"></i> Hide Pannel</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
}

export default Sidebar
