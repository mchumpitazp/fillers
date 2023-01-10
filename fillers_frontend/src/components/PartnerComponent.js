import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Partner() {

    return(
        <Container id='partner-page'>
            <h1 className='mb-5'>Partner <strong>with Us.</strong></h1>

            <Row id='partner-info'>
                <Col md className='col-md-4'>
                    <h6>Here goes a small text of a few lines to create paragraph about anything short you want to talk about. This side of the web is a bit smaller than the right side.</h6>
                </Col>
                <Col md className='col-md-7 offset-md-1'>
                    <h5>Here be placed an small introduction about a few lines too. For example: Robots were something impossible some years ago, nowadays, they are being developed every day and also sold in the market.</h5>

                    <h5 className='partner-subtitle'>References:</h5>
                    
                    <h5>Here be placed an small introduction about a few lines too. For example: Robots were something impossible some years ago, nowadays, they are being developed every day and also sold in the market.</h5>

                    <h5 className='partner-subtitle'>Expectations:</h5>

                    <h5>Here be placed an small introduction about a few lines too. For example: Robots were something impossible some years ago, nowadays, they are being developed every day and also sold in the market.</h5>

                    <h5 className='partner-subtitle'>Mision & Vision:</h5>

                    <h5>Here be placed an small introduction about a few lines too. For example: Robots were something impossible some years ago, nowadays, they are being developed every day and also sold in the market.</h5>
                </Col>
            </Row>

        </Container>
    )
}

export default Partner;