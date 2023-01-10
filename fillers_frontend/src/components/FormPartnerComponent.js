import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function FormPartner() {
    return(
        <section id='form-partner'>
            <Container >
                

                <Row id='form-container'>
                    <h4>Become <strong>a partner</strong></h4>
                    
                    <Col md id='form-info'>
                        <h6>Hola hola hola hola ola hola hola hola ola hola hola hola ola hola hola hola </h6>
                        <h6>Holaaa !!!</h6>
                    </Col>

                    <Col md id='form-form'>
                        <Form>
                            <Row>
                                <Col md>
                                    <FormGroup>
                                        <Label for='firstname'>Name</Label>
                                        <Input id='firstname' type='text'/>
                                    </FormGroup>
                                </Col>
                                <Col md>
                                    <FormGroup>
                                        <Label for='lastname'>Last</Label>
                                        <Input id='lastname' type='text'/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="email">
                                    Email
                                </Label>
                                <Input id="email"/>
                            </FormGroup>

                            <div className='d-flex justify-content-end'>
                                <Button className='btn btn-dark'>
                                    <span>Submit</span>
                                </Button>
                            </div>
                            
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <footer>
                        Fillers 2023
                    </footer>
                </Row>
            </Container>
        </section>
    );
}   

export default FormPartner;