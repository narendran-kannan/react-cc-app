import React, { Component } from 'react';
import Productdetailsnavbar from './Productdetailsnavbar';

export class Productdetailsheader extends Component {
    render() {
        return (
            <div>
                <section className="Product-header-bg-details">
                    
                    <Productdetailsnavbar></Productdetailsnavbar>

                    <div className="text-center pb-5">
                        <div className="home-bg-cover">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="Product-header-title">Fresh and Tasty Products</h1>
                                    <a href="enquire" className="home-header-button mb-5">Enquire now</a>
                                </div>
                                <div className="col-lg-6 pt-5 pb-5 pl-5">
                                    <img className="product-header-img rotateme" src="../assets/dosa--1@1x.png" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Productdetailsheader
