import React, { Component } from 'react'

export class Productdetailsfooter extends Component {
    render() {
        return (
            <div>
                 
                  <section className="">
                    <div className="footer-bg-details pb-5">
                        <div className="row pb-5 pt-5">
                            <div className="col-lg-4 text-center">
                                <img className="footer-logo" src="../assets/chennai-caters-logo-white@1x.png" alt="" />
                                <p className="home-section-5-content pt-4">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of
                                </p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <h2 className="footer-title">Follow Us On</h2>
                                <img className="sm-icon" src="../assets/icon-fb.png" alt="" />
                                <img className="sm-icon" src="../assets/icon-awesome-instagram-1@1x.png" alt="" />
                                <img className="sm-icon" src="../assets/icon-awesome-twitter-1@1x.png" alt="" />
                                <img className="sm-icon" src="../assets/icon-awesome-youtube@1x.png" alt="" />
                            </div>

                            <div className="col-lg-4 text-left">
                                <img className="footer-img  rotateme" src="../assets/dosa-4@1x.png" alt="" />
                                <h2 className="footer-title-1 pl-2">Address</h2>
                                <p className="home-section-5-content-1 pt-4 pl-2">Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of</p>
                            </div>
                        </div>
                        <div className="container text-center">
                            <hr className="copy-rights-line" />
                            <p className="copy-rights">Copyright © 2020 chennai caters - All Rights Reserved.</p>
                        </div>
                    </div>
                </section>
            
            </div>
        )
    }
}

export default Productdetailsfooter
