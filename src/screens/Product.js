import React, { Component } from 'react';
import Productdetailsheader from '../components/Productdetailsheader';
import Productdetailsfooter from '../components/Productdetailsfooter';
import axios from 'axios';
import Loading from '../components/Loading';
export class Productdetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cv: {},
            
        };
    }
    
  
    componentDidMount() {
        // this.setState({isLoading: false})
        const productID = this.props.match.params.productID;
        axios.get(`https://backend.chennaicaters.com/api/${productID}`)
            .then(res => {
                this.setState({
                    cv: res.data,
                    
                });


            })
    }
    render() {
        const product = this.state.cv;
        return (
            
            <div>
                {/* {this.state.isLoading ? (
                    <Loading></Loading>
                ):( */}
                
                {/* <Productdetailsheader></Productdetailsheader> */}

                <section className="pb-5">
                    <div className="pt-5 pl-5 pb-5">
                        <h1 className="home-section-2-title">Our Products</h1>
                        <div className="product-section-2-title-underline"></div>
                        <div className="text-right">
                            <a href="/" >
                                <img className="intmark mr-5" src="../assets/icon-material-cancel@1x.png" alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <img className="Product-details-bg-shape" src="../assets/shape-bg@1x.png" alt="" />
                            <div className=" product-details-img-bg text-center">
                                <img className="product-details-img" src={product.product_img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5 pl-4">
                            <h1 className="product-details-title">
                                {product.product_name}
                            </h1>
                            <p className="pt-5 product-details-content">
                                {product.product_description}
                            </p>

                            <h1 className="product-details-sub-title">Ingredients</h1>
                            <ul className="product-details-points">
                                <li>Rice </li>
                                <li>Water </li>
                                <li>Masala</li>
                            </ul>
                            <div className="text-center ">
                                <a href="https://bit.ly/2WHP26e" className="Product-details-button-1 ">Enquire now</a>
                            </div>
                        </div>

                    </div>

                </section>
                {/* <Productdetailsfooter></Productdetailsfooter> */}
            
                {/* )} */}
            </div>
        )
    }
}

export default Productdetails
