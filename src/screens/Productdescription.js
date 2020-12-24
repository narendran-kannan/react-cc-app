import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Productdetails from './Productdetails';

export class Productdescription extends Component {

    render() {
        return (
            <div>
                <Header></Header>

              <Productdetails></Productdetails>

                <Footer></Footer>
            </div>
        )
    }
}

export default Productdescription
