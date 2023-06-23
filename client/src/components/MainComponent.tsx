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

    componentDidMount() {}

    render() {
        return(
            <React.Fragment>
                <Header />
                <Routes>
                    <Route index element={<Products />} />
                    {/* <Route exact path='/partnership' element={<Partner />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/aboutus' element={<About />} /> */}
                    <Route path='/products' element={<Products />}/>
                </Routes>
                <FormPartner />
            </React.Fragment>
        );
    }
}

export default Main;