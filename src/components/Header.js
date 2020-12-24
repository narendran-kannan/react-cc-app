import React, { Component } from 'react'
import Navbar from './Navbar';


export class Header extends Component {
    
    render() {
        return (
            <div>
                <section className="Product-header-bg">
                    
                    <Navbar></Navbar>

                    <div className=" text-center pb-5">
                        <div className="home-bg-cover">
                            <div className="row menu-visible">
                                <div className="col-lg-6">
                                    <h1 className="Product-header-title">Fresh and Tasty <br/> Products</h1>
                                    <a href="https://bit.ly/2WHP26e" className="home-header-button mb-5">Enquire now</a>
                                </div>
                                <div className="col-lg-6 pt-5 pb-5 pl-5">
                                    <img className="product-header-img rotateme" src="./assets/dosa--1@1x.png" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

            </div>
        )
    }
}

export default Header
