import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Products() {
    return(

        <section id='products-page'>
            <Container id='products-container'>
                <h1>Our <strong>Products.</strong></h1>

                <Row>
                    <Col md>
                        IMG
                    </Col>
                    <Col md>
                        <h2><strong>HA Shine</strong></h2>
                        
                        <h4 className='product-subtitle'>
                            <span className='me-5'>WHAT IS IT</span>
                            It is a long establishe distracted by the readable
                        </h4>
                    </Col>
                </Row>

                <Row>
                    <Col md>
                        <h2><strong>HA Shape</strong></h2>
                    </Col>
                    <Col md>
                        IMG
                    </Col>
                </Row>

            </Container>
        </section>
        
    );
}

export default Products;