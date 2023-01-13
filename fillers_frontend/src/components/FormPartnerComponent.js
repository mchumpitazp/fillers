import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CountrySelect from 'react-bootstrap-country-select';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { baseUrl } from '../shared/baseUrl';

function FormPartner() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPartner = {
            name: name,
            email: email,
            telephone: telephone,
            country: country.name,
            message: message
        }

        try {
            const res = await fetch(baseUrl + '/partners', {
                method: 'POST',
                body: JSON.stringify(newPartner),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            });

            if (res.status === 200) {
                console.log('POST DONE')
            }
            else {
                console.log('POST ERROR')
            }

        } catch (error) {
            console.log('POST Error: ', error.message);
        }

        alert(JSON.stringify(newPartner));
    }

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
                        <Form onSubmit={handleSubmit}>

                            <FormGroup>
                                <Label for='name'>Name *</Label>
                                <Input id="name" type='text'
                                    value={name}
                                    onChange={e => setName(e.target.value)}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email *</Label>
                                <Input id="email" type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for='telephone'>Telephone *</Label>
                                <Row>
                                    <Col md>
                                        <PhoneInput id="telephone"
                                            country={'fr'}
                                            countryCodeEditable={false}
                                            value={telephone}
                                            onChange={setTelephone}/>
                                    </Col>
                                    <Col md></Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Label for='country'>Country *</Label>
                                <CountrySelect id="country"
                                    placeholder=''
                                    value={country}
                                    onChange={setCountry}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for='message'>Message</Label>
                                <Input id="message" type='textarea' rows='4'
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}/>
                            </FormGroup>

                            <Row>
                                <Col md className='col-md-8 m-auto mb-3'>
                                    <span id='required-warning'>* Required</span>
                                </Col>
                                <Col md className='col-md-4 m-auto'>
                                    <Button type='submit'  className='btn btn-dark'>
                                        <span>Submit</span>
                                    </Button>
                                </Col>
                            </Row>
                            
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