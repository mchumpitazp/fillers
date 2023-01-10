import React from 'react';

// Components
import Header from './HeaderComponent';
import Products from './ProductsComponent';
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
                <Products />
                <FormPartner />
            </React.Fragment>
        );
    }
}

export default Main;