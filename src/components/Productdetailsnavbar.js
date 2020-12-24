import React, { Component } from 'react'

export class Productdetailsnavbar extends Component {
    render() {
        return (
            <div>
                 <div className="container navi">
                        <div className="row text-center">
                            <div className="col-lg-2 pt-5">
                                <a href="/" className=" nav-links">
                                    Home
                                </a>
                            </div>
                            <div className="col-lg-2 pt-5">
                                <a href="/productsview" className=" nav-links">
                                    Products
                                </a>
                            </div>
                            <div className="col-lg-4 pt-4">
                                <a href="/">
                                    <img className="nav-logo" src="../assets/chennai-caters-logo-1@1x.png" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-2 pt-5">
                                <a href="/aboutus" className=" nav-links">
                                    About us
                                </a>
                            </div>
                            <div className="col-lg-2 pt-5">
                                <a href="/contactus" className=" nav-links">
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>
            
            
                    <div className="menu-container">
  
                        {/* <input type="checkbox" id="openmenu" className="hamburger-checkbox"/>
                        
                        <div className="hamburger-icon">
                            <label for="openmenu" id="hamburger-label">
                            <span></span>
                            <span></span>
                            <span></span>
                            </label>    
                        </div>

                            <div className="menu-pane">
                            
                            <nav>
                                <ul className="menu-links">
                                <li><a href="###"></a></li>
                                <li><a href={`/`}>Home</a></li>
                                <li><a href={`/productsview`}>Products</a></li>
                                <li><a href={`/aboutus`}>About us</a></li>
                                <li><a href={`/contactus`}>Contact us</a></li>
                                </ul>
                                
                            </nav>
                            </div>
                         */}
                            
                            <div>
                                <img className="mobile_logo" src="../assets/chennai-caters-logo-1@1x.png"></img>
                            </div>

                         <label className="lable">
                            <input type='checkbox' />
                            <span className='menu'>
                                <span className='hamburger'></span>
                            </span>
                            <ul>
                                <li>
                                    <a href={`/`}>HOME</a>
                                </li>
                                <li>
                                    <a href={`/productsview`}>PRODUCTS</a>
                                </li>
                                <li>
                                    <a href={`/aboutus`}>ABOUT </a>
                                </li>
                                <li>
                                    <a href={`/contactus`}>CONTACT</a>
                                </li>
                                {/* <li>
                                    <a href="contact.html">CONTACT</a>
                                </li> */}
                            </ul>
                        </label>
                    </div>
            </div>
        )
    }
}

export default Productdetailsnavbar
