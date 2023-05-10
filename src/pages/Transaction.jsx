import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../style/Transaction.css'
import Helmet from '../components/Helmet/Helmet'
import Sidebar from '../components/bar/Sidebar'


const Transaction = () => {
    return (
        <Helmet title="Transaction">
            <div className="d-flex">
                <Sidebar />

                <Container>
                    <Row>
                        <div className="trans-action">
                            <div className="balance_data">
                                <h3>Current balance</h3>
                                <div className="transaction-money">
                                <p>20560.00</p>
                                <i class="ri-money-dollar-circle-line"></i>
                                </div>
                            </div>
                            <div className="transaction">
                                <Col>
                                <div className="recent__transaction">
                                    <div className="data__transaction">
                                        <p className='deposit'><span>8 DEPOSIT</span>    01/08/2020</p>
                                        <p className='transaction-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='deposit'><span>8 DEPOSIT</span>    01/08/2020</p>
                                        <p className='transaction-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='withdrawal'><span>8 withdrawal</span>   01/08/2020</p>
                                        <p className='withdrawal-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='withdrawal'><span>8 withdrawal</span>   01/08/2020</p>
                                        <p className='withdrawal-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='withdrawal'><span>8 withdrawal</span>   01/08/2020</p>
                                        <p className='withdrawal-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='deposit'><span>8 DEPOSIT</span>    01/08/2020</p>
                                        <p className='transaction-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='deposit'><span>8 DEPOSIT</span>    01/08/2020</p>
                                        <p className='transaction-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='deposit'><span>8 DEPOSIT</span>    01/08/2020</p>
                                        <p className='transaction-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                    <div className="data__transaction">
                                        <p className='withdrawal'><span>8 withdrawal</span>   01/08/2020</p>
                                        <p className='withdrawal-num'>1300.00</p>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className="transaction__boxs">
                                    <div className="transfer__money">
                                        <h6>Transfer money</h6>
                                        <div className="input">
                                        <input type="text" />
                                        {/* <p>Transfer to</p> */}
                                        <input type="text" />
                                        {/* <p>Amount</p> */}
                                        <button><i class="ri-arrow-right-line"></i></button>
                                        </div>
                                    </div>
                                        <div className="request__money">
                                            <h6>Request</h6>
                                            <div className="input">
                                            <input type="text" />
                                            <input type="text" />
                                            {/* <p>Request from</p> */}
                                            {/* <p>Amount</p> */}
                                            <button><i class="ri-arrow-right-line"></i></button>
                                            </div>
                                    </div>
                                </div>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </Helmet>
    )
}

export default Transaction
