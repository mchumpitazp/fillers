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
                                <h2><strong>HA Shape</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>THE DENSEST ONE</span>
                                    Developed for a precise oval of the face
                                </h4>

                                <div>
                                    <Row>
                                        <Col className='col-4'><p><strong>Ingredient</strong></p></Col>
                                        <Col className='col-8'><p>Hyaluronic Acid 20 mg/mL</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Volume</strong></p></Col>
                                        <Col className='col-8'><p>1 ml x 1 syringe</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Needle included</strong></p></Col>
                                        <Col className='col-8'><p>27 G x 13 mm (2 pcs)</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Effect Duration</strong></p></Col>
                                        <Col className='col-8'><p>8-12-18 months</p></Col>
                                    </Row>
                                    <hr/>
                                </div>
                            </article>
                    </Col>
                    <Col md className='order-md-1 img-container p-0'>
                        <img src={baseUrl + '/images/shape.png'} alt='ha_shape'/>
                    </Col>
                    
                </Row>

                <Row className='product-container'>
                    <Col md>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Deep</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>PRECISE AND DURABLE</span>
                                    Designed for the natural correction of facial contours
                                </h4>

                                <div>
                                    <Row>
                                        <Col className='col-4'><p><strong>Ingredient</strong></p></Col>
                                        <Col className='col-8'><p>Hyaluronic Acid 20 mg/mL</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Volume</strong></p></Col>
                                        <Col className='col-8'><p>1 ml x 1 syringe</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Needle included</strong></p></Col>
                                        <Col className='col-8'><p>27 G x 13 mm (2 pcs)</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Effect Duration</strong></p></Col>
                                        <Col className='col-8'><p>8-12-18 months</p></Col>
                                    </Row>
                                    <hr/>
                                </div>
                            </article>
                        </Col>
                    <Col md className='img-container p-0'>
                        <img src={baseUrl + '/images/deep.png'} alt='ha_deep'/>
                    </Col>
                </Row>
                
                <Row className='product-container'>
                    <Col md className='order-md-2'>
                            <article className='product-info'>
                                <h5>FILLER</h5>
                                <hr/>
                                <h2><strong>HA Fine</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>BALANCED AND DELICATE</span>
                                    Formulated low viscosity to fill fine lines 
                                </h4>

                                <div>
                                    <Row>
                                        <Col className='col-4'><p><strong>Ingredient</strong></p></Col>
                                        <Col className='col-8'><p>Hyaluronic Acid 20 mg/mL</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Volume</strong></p></Col>
                                        <Col className='col-8'><p>1 ml x 1 syringe</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Needle included</strong></p></Col>
                                        <Col className='col-8'><p>25 G x 13 mm UTW</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Effect Duration</strong></p></Col>
                                        <Col className='col-8'><p>6-8-12 months</p></Col>
                                    </Row>
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
                                <h2><strong>HA Shine</strong></h2>
                                
                                <h4 className='product-subtitle'>
                                    <span>THE SOFTEST ONE</span>
                                    Designed to fill and correct the perioral area
                                </h4>

                                <div>
                                    <Row>
                                        <Col className='col-4'><p><strong>Ingredient</strong></p></Col>
                                        <Col className='col-8'><p>Hyaluronic Acid 20 mg/mL</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Volume</strong></p></Col>
                                        <Col className='col-8'><p>2 ml x 1 syringe</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Needle included</strong></p></Col>
                                        <Col className='col-8'><p>27 G x 13 mm (2 pcs)</p></Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className='col-4'><p><strong>Effect Duration</strong></p></Col>
                                        <Col className='col-8'><p>3-6-12 months</p></Col>
                                    </Row>
                                    <hr/>
                                </div>
                            </article>
                        </Col>
                    <Col md className='img-container p-0'>
                        <img src={baseUrl + '/images/shine.png'} alt='ha_shine'/>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
}

export default Products;