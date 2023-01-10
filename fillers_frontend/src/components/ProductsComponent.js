import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function Products() {
    return(
        // If background remains white instead of lighy gray
        // then section tag is useless, just move id to Container
        <section id='products-page'>
            <Container>
                <h1>Our <strong>Products.</strong></h1>

                <Row className='product-container'>
                    <Col md className='order-md-2 pt-0'>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Shine</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>WHAT IS IT</span>
                                    It is a long establishe distracted by the readable
                                </h4>

                                <div>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                </div>
                            </article>
                    </Col>
                    <Col md className='order-md-1 img-container p-0'>
                        <img src={baseUrl + '/images/shine.png'} alt='ha_shine'/>
                    </Col>
                    
                </Row>

                <Row className='product-container'>
                    <Col md>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Shape</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>WHAT IS IT</span>
                                    It is a long establishe distracted by the readable
                                </h4>

                                <div>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                </div>
                            </article>
                        </Col>
                    <Col md className='img-container p-0'>
                        <img src={baseUrl + '/images/shape.png'} alt='ha_shape'/>
                    </Col>
                </Row>
                
                <Row className='product-container'>
                    <Col md className='order-md-2 pt-0'>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Fine</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>WHAT IS IT</span>
                                    It is a long establishe distracted by the readable
                                </h4>

                                <div>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                </div>
                            </article>
                    </Col>
                    <Col md className='order-md-1 img-container p-0'>
                        <img src={baseUrl + '/images/fine.png'} alt='ha_fine'/>
                    </Col>
                    
                </Row>

                <Row className='product-container'>
                    <Col md>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Deep</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>WHAT IS IT</span>
                                    It is a long establishe distracted by the readable
                                </h4>

                                <div>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                    <p>Description</p>
                                    <hr/>
                                </div>
                            </article>
                        </Col>
                    <Col md className='img-container p-0'>
                        <img src={baseUrl + '/images/deep.png'} alt='ha_deep'/>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
}

export default Products;