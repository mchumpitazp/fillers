import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './HeaderComponent';
import Partner from './PartnerComponent';
import Products from './ProductsComponent';
import About from './AboutComponent';
import FormPartner from './FormPartnerComponent';

// Redux

class Main extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return(
            <React.Fragment>
                <Header />
                <Routes>
                    <Route index element={<Partner />} />
                    <Route exact path='/partnership' element={<Partner />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/aboutus' element={<About />} />
                </Routes>
                <FormPartner />
            </React.Fragment>
        );
    }
}

export default Main;