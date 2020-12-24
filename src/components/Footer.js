import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="">
                    <div className="footer-bg pb-5">
                        <div className="row pb-5 pt-5">
                            <div className="col-lg-4 text-center">
                                <img className="footer-logo" src="./assets/chennai-caters-logo-white@1x.png" alt="" />
                                <p className="home-section-5-content pt-4">Brings the enchanting flavor hidden in mom's cuisine,
                                in just a few flashes.
                                An aromatic treat for nostrils; a Tasty treat for your soul. A Bon Appetite!

                                </p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <h2 className="footer-title">Follow Us On</h2>
                                <a href="https://www.facebook.com/chennai.caters/" target="_blank">
                                    <img className="sm-icon" src="./assets/icon-fb.png" alt="" />
                                </a>
                                <img className="sm-icon" src="./assets/icon-awesome-instagram-1@1x.png" alt="" />
                                <img className="sm-icon" src="./assets/icon-awesome-twitter-1@1x.png" alt="" />
                                <img className="sm-icon" src="./assets/icon-awesome-youtube@1x.png" alt="" />
                            </div>

                            <div className="col-lg-4 text-left">
                                <img className="footer-img  rotateme" src="./assets/dosa-4@1x.png" alt="" />
                                <h2 className="footer-title-1 pl-2">Address</h2>
                                <p className="home-section-5-content-1 pt-4 pl-2">173, Advance Blvd, Brampton, ON, <br/> Canada L6T 4H9.</p>
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

export default Footer
