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
            <Header />
        );
    }
}

export default Main;