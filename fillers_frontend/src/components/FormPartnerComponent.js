import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, Alert, Spinner } from 'reactstrap';
import CountrySelect from 'react-bootstrap-country-select';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { baseUrl } from '../shared/baseUrl';

function FormPartner() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [country, setCountry] = React.useState();
    const [message, setMessage] = React.useState('');

    const [nameVal, setNameVal] = React.useState(true);
    const [emailVal, setEmailVal] = React.useState(true);
    const [telephoneVal, setTelephoneVal] = React.useState(true);
    const [countryVal, setCountryVal] = React.useState(true);

    const [validation, setValidation] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [spinnerOpen, setSpinnerOpen] = React.useState(false);

    React.useEffect(() => {
        if (validation) {
            handleValidSubmit();
            setValidation(false);
        }
    }, [validation]); // eslint-disable-line react-hooks/exhaustive-deps
    
    React.useEffect(() => {
        let timeout;
        if (success) {
            timeout = setTimeout(() => { setSuccess(false) }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [success]);

    React.useEffect(() => {
        let timeout;
        if (failed) {
            timeout = setTimeout(() => { setFailed(false) }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [failed]);

    const clearInputs = () => {
        setName('');
        setEmail('');
        setTelephone('+33');
        setCountry('');
        setMessage('');
    };

    const handleValidSubmit = () => {
        const newPartner = {
            name: name,
            email: email,
            telephone: telephone,
            country: country?.name,
            message: message
        };

        return fetch(baseUrl + '/partners', {
            method: 'POST',
            body: JSON.stringify(newPartner),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setSpinnerOpen(false);

            if (response.status === 200) {
                console.log('POST DONE');
                clearInputs();
                setSuccess(true);
            }
            else {
                console.log('POST ERROR');
                setFailed(true);
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .catch(error => {
            setSpinnerOpen(false);
            console.log('POST Error: ', error.message);
        })

    };
 
    const validateForm = () => {
        let nameTmp = false;
        let emailTmp = false;
        let telephoneTmp = false;
        let countryTmp = false;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (name.length > 0) {
            nameTmp = true;
            setNameVal(true);
        } else { setNameVal(false); }

        if (emailRegex.test(email)) {
            emailTmp = true;
            setEmailVal(true);
        } else { setEmailVal(false); }

        if (telephone.length > 6) {
            telephoneTmp = true;
            setTelephoneVal(true);
        } else { setTelephoneVal(false); }
        
        if (country?.name?.length > 3) {
            countryTmp = true;
            setCountryVal(true);
        } else { setCountryVal(false); }

        return (nameTmp & emailTmp & telephoneTmp & countryTmp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSpinnerOpen(true);
            setValidation(true);
        } else {
            setValidation(false)
        }
    }

    return(
        <section id='form-partner'>
            <Container >
                
                <Row id='form-container'>
                    <h4>Become <strong>a partner</strong></h4>
                    
                    <Col md id='form-info'>
                        <p>Fillers<span>+</span>&nbsp;&nbsp;&nbsp;team gives you a warm welcome. Our team will reach you as soon as possible.</p>
                    </Col>

                    <Col md id='form-form'>
                        <Form noValidate onSubmit={handleSubmit}>

                            <FormGroup>
                                <Label for='name'>Name *</Label> 
                                <Input id="name" type='text' required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onClick={() => setNameVal(true)}
                                    invalid={nameVal===false}/>
                                <FormFeedback>
                                     Please provide a valid name
                                </FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email *</Label>
                                <Input id="email" type='email' required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onClick={() => setEmailVal(true)}
                                    invalid={emailVal===false}/>
                                <FormFeedback>
                                    Please provide a valid email
                                </FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for='telephone'>Telephone *</Label>
                                <Row>
                                    <Col md>
                                        <PhoneInput
                                            country={'fr'}
                                            countryCodeEditable={false}
                                            value={telephone}
                                            onChange={setTelephone}
                                            onClick={() => setTelephoneVal(true)}/>
                                        <Input hidden invalid={telephoneVal===false}/>
                                        <FormFeedback>
                                            Please provide a valid telephone
                                        </FormFeedback>
                                    </Col>
                                    <Col md></Col>
                                </Row>
                            </FormGroup>

                            <FormGroup onClick={() => setCountryVal(true)}>
                                <Label for='country'>Country *</Label>
                                <CountrySelect
                                    placeholder=''
                                    value={country}
                                    onChange={setCountry} />
                                <Input hidden invalid={countryVal===false}/>
                                <FormFeedback>
                                    Please choose a country
                                </FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for='message'>Message</Label>
                                <Input id="message" type='textarea' rows='4'
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}/>
                            </FormGroup>

                            <Alert isOpen={success} className='my-3 py-2'>
                                <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Thank you!</h6>
                            </Alert>

                            <Alert isOpen={failed} className='my-3 py-2' color='danger'>
                                <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Please, try later</h6>
                            </Alert>

                            {
                                spinnerOpen &&
                                <div className='d-flex justify-content-center my-2'>
                                    <Spinner type='grow' style={{backgroundColor: '#E686B8'}}>
                                        Loading ...
                                    </Spinner>
                                </div>
                            }

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
                        <Row>
                            <Col className='d-flex align-items-center'>
                                <p className='m-0'>&#169; 2023 <span>All rights reserved.</span></p>
                            </Col>
                            {/* <Col className='d-flex justify-content-end'>
                                <Button >
                                    <i class="bi bi-whatsapp"></i>
                                </Button>
                                <Button className='btn mx-4'>
                                    <i class="bi bi-facebook"></i>
                                </Button>
                                <Button>
                                    <i class="bi bi-instagram"></i>
                                </Button>
                            </Col> */}
                        </Row>
                        
                    </footer>
                </Row>
            </Container>
        </section>
    );
}   

export default FormPartner;