import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

export class Aboutus extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isLoading: true
         };
    }
    
    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }
    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <Loading></Loading>
                ):(
                <div>
                <section className="Product-header-bg">
                    
                    <Navbar></Navbar>

                    <div className=" text-center pb-5">
                        <div className="home-bg-cover">
                            <div className="row menu-visible">
                                <div className="col-lg-6">
                                    <h1 className="Product-header-title">About Us</h1>
                                    <a href="https://bit.ly/2WHP26e" className="home-header-button mb-5">Enquire now</a>
                                </div>
                                <div className="col-lg-6 pt-5 pb-5 pl-5">
                                    <img className="product-header-img rotateme" src="./assets/dosa--1@1x.png" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>


                <section className="container pt-5 mt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="home-section-3-title-1  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Chennai Caters</h1>
                            <p className="home-section-3-content  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <br/>
                            Chennai Caters has been serving numerous authentic batter varieties starting from 2008. This tasty cum appetizing adventure commenced as a family-run business furthermore extended the mouth-watering achievement to every nook and corner only with the vastest support from our the best of the bunch consumers and retailers. Now, we are the greatest independent "Dosa Batter" manufacturers in North America, plating the customers with love fused batter.
                            <br/><br/>
                            Our range of products including Organic Dosa batter, Ready to cook phulka, paneer, dahi, and a range of ready to serve chutneys/sambar.
                            <br/><br/>
                            Our ongoing dedication to developing innovative products every food lovers can relish has been recognized by our consumers and motivated us to extend our product lines.
After all these years, Chennai caters is still a family-run business. Our dream of offering high-quality authentic Indian ready to serve/cook family-friendly price continues.

                            </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img className="about-section-3-img" width="100%" src="./assets/about_image.png" alt=""/>
                        </div>
                    </div>
                </section>

                <section className="container pt-5 pb-5">
                    <div className="row pt-5">
                        <div className="col-lg-6  order-lg-last">
                            <h1 className="home-section-3-title-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Why do you need us ?</h1>
                        
                                <ul>
                                    
                                    <li> <p className="home-section-3-content wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">

                                    The concept of "Instantly" rings the door-bell. Saves a slice of your busy day.</p></li>
                                    <li> <p className="home-section-3-content wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Eating time is to feel your relaxed soul thanking the food and asking to make us healthy. And it shouldn't be done in a hurry-burry. Our Batter lessens the cooking time and extends the loving time.</p></li>
                                    <li> <p className="home-section-3-content wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">To strengthen the excellent bond between food and you.</p></li>
                                </ul>
                        </div>
                        
                        <div className="col-lg-6 text-center order-lg-first">
                            <img className="about-section-3-img rotateme" width="100%" src="./assets/subtraction-1@1x-12.png" alt=""/>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
                </div>
                )}
            </div>
        )
    }
}

export default Aboutus

