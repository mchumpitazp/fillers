import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Products() {
    return(

        <section id='products-page'>
            <Container>
                <h1>Our <strong>Products.</strong></h1>

                <Row className='product-container'>
                    <Col md className='img-container p-0'>
                        <img src='tmp.png' alt='tmp'/>
                    </Col>
                    <Col md>
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
                </Row>



                <Row className='product-container'>
                <Col md>
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
                    <Col md className='img-container p-0'>
                        <img src='tmp.png' alt='tmp'/>
                    </Col>
                </Row>

            </Container>
        </section>
        
    );
}

export default Products;