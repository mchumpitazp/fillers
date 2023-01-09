import React from 'react';

// Components
import Header from './HeaderComponent';
import Products from './ProductsComponent';

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
            </React.Fragment>
        );
    }
}

export default Main;