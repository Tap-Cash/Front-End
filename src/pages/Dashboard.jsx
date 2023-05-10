import React from 'react'
import '../style/Dashboard.css'
import { Container, Row, Col } from 'reactstrap'
import profile from '../assets//img/profile.jpeg'
import Helmet from '../components/Helmet/Helmet'
import Sidebar from '../components/bar/Sidebar'

const Dashboard = () => {
    return (
        <Helmet title="Dashboard" >
            
            <div className="d-flex">

                    <Sidebar />
                <div className='dashboard'>
                    <Container>
                        <Row>
                            <div className="topbar__data">
                            <Col>
                            <div className="data">
                            <p>Today, May 10, 2023</p>
                            <h2>Dashboard</h2>
                            </div>
                            </Col>
                            <Col>
                            <div className="profile">
                            <img src={profile} alt="" />
                            <p>kotta</p>
                            </div>
                            </Col>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                            <div className="balance__boxs">
                                <div className="balance">
                                    <p className='balabce-text'>Balance</p>
                                    <div className="money">
                                    <i class="ri-money-dollar-circle-line"></i>
                                    <p className='balance-num'> 20560.00</p>
                                    </div>
                                </div>
                                <div className="this__week">
                                    <p className='week-text'>This Week</p>
                                    <div className="week-num">
                                    <i class="ri-money-dollar-circle-line"></i>
                                    <p className='balance-num'>830.00</p>
                                    </div>
                                </div>
                                <div className="This__month">
                                    <p className='week-text'>This Month</p>
                                    <div className="week-num">
                                    <i class="ri-money-dollar-circle-line"></i>
                                    <p className='balance-num'>1,430.00</p>
                                    </div>
                                </div>
                                <div className="last__month">
                                    <p className='week-text'>Last Month</p>
                                    <div className="week-num">
                                    <i class="ri-money-dollar-circle-line"></i>
                                    <p className='balance-num'>3,430.00</p>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        <Row>.
                            <Col>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Helmet>
    )
}

export default Dashboard
