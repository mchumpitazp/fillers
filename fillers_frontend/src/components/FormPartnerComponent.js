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
                        <p>Our team will reach you as soon as possible so all your questions/topics/recommendations will be replied. We are excited to receive your info. (e.g.)</p>
                        <p>Fillers team gives you a warm welcome.</p>
                    </Col>

                    <Col md id='form-form'>
                        <Form>
                            <Row>
                                <Label for='firstname'>Name</Label>
                                <Col md>
                                    <FormGroup className='mb-0'>
                                        <Input id='firstname' type='text'/>
                                        <span className='tiny'>Firstname</span>
                                    </FormGroup>
                                </Col>
                                <Col md>
                                    <FormGroup>
                                        <Input id='lastname' type='text'/>
                                        <span className='tiny'>Lastname</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <FormGroup tag='fieldset'>
                                <legend className='form-label'>
                                    Interested in:
                                </legend>
                                <Row>
                                    <Col md>
                                        <FormGroup check>
                                            <Input name="radio1" type='radio'/>
                                            {' '}
                                            <Label check>Our Company</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md>
                                        <FormGroup check>
                                            <Input name="radio1" type='radio'/>
                                            {' '}
                                            <Label check>Our Products</Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup check>
                                    <Input name="radio1" type='radio'/>
                                    {' '}
                                    <Label check>Other</Label>
                                </FormGroup>
                            </FormGroup>

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