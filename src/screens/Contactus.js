import React, { Component } from 'react';
import emailjs from "emailjs-com";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import '../index.css';

export class Contactus extends Component {
     constructor(props){
     super(props)
     this.state = {
     isLoading: true
     };
     this.sendEmail = this.sendEmail.bind(this);
     
};
componentDidMount(){
    this.setState({
        isLoading: false
    });
}
    sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_iu5mawt', e.target, 'user_YDYtQEn1NbhEiOgwXGWOw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
 

    render() {
        return (
            <div>
               {this.state.isLoading ? (
                   <Loading></Loading>
               ):(
                    <div>
                <div className="home_footer">
                <section className="Product-header-bg">
                    
                    <Navbar></Navbar>

                    <div className=" text-center pb-5">
                        <div className="home-bg-cover">
                            <div className="row menu-visible">
                                <div className="col-lg-6">
                                    <h1 className="Product-header-title">Contact US</h1>
                                    <a href="https://bit.ly/2WHP26e" className="home-header-button mb-5">Enquire now</a>
                                </div>
                                <div className="col-lg-6 pt-5 pb-5 pl-5">
                                    <img className="product-header-img rotateme" src="./assets/dosa--1@1x.png" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                    <section className="contact-bg-color">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 contactaddress">
                                   
                                    <div className=" wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h6 className="contact-sub-title wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Contact detail</h6>
                                    <p  className="contact-sub-content wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    Share your mouth-watering happening with us. Never hesitate to reach us!
                                    </p>
                                        <h6 className="contact-sub-title">PHONE :</h6>
                                        <p  className="contact-sub-content">+1 905-783-6777</p>
                                        <h6 className="contact-sub-title">EMAIL :</h6>
                                        <p className="contact-sub-content">chennaicatersca@gmail.com</p>
                                        <h6 className="contact-sub-title">ADDRESS :</h6>
                                        <p className="contact-sub-content">173, Advance Blvd, Brampton, ON,<br/> Canada L6T 4H9</p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 pt-5 text-center">
                                    <img className="contact-logo wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/chennai-caters-logo-1@1x.png" alt=""/>
                                  <div>
                                      <form onSubmit={this.sendEmail}>
                                      <div classNameName="container">
            
                    <div classNameName="row pt-5 mx-auto">
                        <div classNameName="col-12 form-group mx-auto">
                            <input type="text" classNameName="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div classNameName="col-12 form-group pt-2 mx-auto">
                            <input type="email" classNameName="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div classNameName="col-12 form-group pt-2 mx-auto">
                            <input type="text" classNameName="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div classNameName="col-12 form-group pt-2 mx-auto">
                            <textarea classNameName="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div classNameName="col-12 pt-3 mx-auto">
                            <input type="submit" classNameName="btn btn-infos" value="Send Message"></input>
                        </div>
                    </div>
                                    {/* <div className="row wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="col-lg-6">
                                    
                                            {/* <!-- <input type="text" className="input mt-4">  --> */}
                                            {/* <input type="text" className="form-control form-control-1 mt-4"  name="name"
                                                placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" className="form-control form-control-1 mt-4"  name="email"
                                                placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control form-control-1 mt-4 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s"  name="subject"
                                        placeholder="Subject" />
                                    <textarea className="form-control mt-4 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" rows="5" id="comment" name="message"
                                        placeholder="message"></textarea>
                                    <div className="mt-5 mb-5 text-right wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <a href="" className="product-button mt-5">Send</a>
                                    </div>  */}
                                    </div>
                                    </form><br></br>
                                </div>
                               
                                </div>
                                
                            </div>
                        </div>
                    </section>

                    <Footer></Footer>
                 </div>
                 </div>
                )}
                            </div>
        )
    }
}

export default Contactus
