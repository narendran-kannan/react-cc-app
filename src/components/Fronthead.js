import React, { Component } from 'react'
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export class Fronthead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cc: [],
            isLoading: true,
            open :false
        };
    }
    
    handleClickOpen = (e) => {
        this.setState({open:true});
    };

    handleClose = () => {
        this.setState({open:false});
    };

    
  
    componentDidMount() {
        // this.setState({isLoading: false});
        axios.get('http://34.86.60.208//api/')
            .then(res => {
                this.setState({
                    cc: res.data,
                    isLoading: false
                });
                console.log(res.data);
                // console.log(cc.id);
            })
    }
    render() {
        return (
            <div>

            <div>
                { this.state.isLoading ? (
                    <Loading></Loading>
                ):(
                <section>
                    <div>
                    <div classNameName="home-header-bg-color">
                        <section className="home-header-bg home-header-bg-color"  >

                            <Navbar></Navbar>


                            <div className="text-center pb-5">
                                <div className="home-bg-cover">
                                    <h5 className="home-header-title wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                        Bite the love in our <span className="home-header-title-red"> FOOD Batter,</span> <br />
                                        <span className="home-header-title-2"> A ready-made batter saves time</span>

                                    </h5>
                                    <a href={`/productsview`} className="home-header-button  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Products</a>

                                    <div className="home-header-img  home-bottom  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                                        <img className="" src="./assets/product-@1x.png" width="100%" alt="" />
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>


                    <section className="home-section-1-img text-center pb-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="home-section-1-title wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Ready to Cook <br />
                                Delicious Products
                                </h1>
                            </div>
                            <div className="col-lg-6 text-center home-section-1-img-1-1 pl-5">
                                <img className="home-section-1-img-1 rotateme " src="./assets/dosa-@1x.png" width="100%" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="text-center home-section-2-bg-color pt-5 pb-5">
                        <div className=" wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h1 className="home-section-2-title">Top Trending Products</h1>
                            <div className="home-section-2-title-underline"></div>
                        </div>
                    </section>

                    <section className=" pb-5 text-center products-bg">
                        <div className="row text-center">
                            {this.state.cc.map((product) => (
                                <div className="col-lg-3">


                                    <div key={product.id} className="product m-5 pb-4 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <a href={`/Toptrendproduct/${product.id}`}> <img className="product-img" src={product.product_img} width="100%" alt={product.product_name} />
                                            <h2 className="product-name">{product.product_name}</h2></a>
                                        <a href={`/Toptrendproduct/${product.id}`} className="product-button">Products <span><img className="product-button-arrow"
                                            src="./assets/icon-awesome-arrow-up@1x.png" alt="" /></span> </a>
                                             {/* <a href="#" className="product-button"  onClick={this.handleClickOpen}>
                                                            Products <span><img className="product-button-arrow"
                                                            src="./assets/icon-awesome-arrow-up@1x.png" alt="" /></span> 
                                                            </a> */}
                                                            <div>
                                                            {/* <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Product Details"}</DialogTitle>
        <DialogContent> */}
          {/* <DialogContentText id="alert-dialog-description">
          <div className="">
                                                            <section className="">
                                                                <div className=" pl-5"> */}
                                                                    {/* <h1 className="home-section-2-title">Our Products</h1>
                                                                    <div className="product-section-2-title-underline"></div> */}
                                                                    {/* <div className="text-right"> */}
                                                                    {/* <Button onClick={this.handleClose} color="" autoFocus> */}
                                                                        {/* <a href="/productsview" > */}
                                                                            {/* <img onClick={this.handleClose} className="intmark " src="../assets/icon-material-cancel@1x.png" alt="" /> */}
                                                                        {/* </a> */}
                                                                        {/* </Button> */}
                                                                    </div>
                                                                </div>

                                                                {/* <div className="row"> */}
                                                                    {/* <div className="col-lg-6"> */}
                                                                        {/* <img className="Product-details-bg-shape" src="../assets/shape-bg@1x.png" alt="" />
                                                                        <div className=" product-details-img-bg text-center">
                                                                            <img className="product-details-img" src={product.product_img} alt="" />
                                                                        </div> */}
                                                                    {/* </div> */}
                                                                    {/* <div className="col-lg-6 pb-5 pl-4"> */}
                                                                        {/* <h1 className="product-details-title">
                                                                            {product.product_name}
                                                                        </h1>
                                                                        <p className=" product-details-content">
                                                                            {product.product_description}
                                                                        </p>
                                                                         */}
                                                                    {/* </div> */}

                                                                {/* </div> */}

                                                            {/* </section>
                                                            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions> */}
          {/* <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button> */}
          {/* <Button onClick={this.handleClose} color="primary" autoFocus>
            Close
          </Button> */}
          {/* <div className="text-center ">
                <a href="https://bit.ly/2WHP26e" className="Product-details-button-12">Enquire now</a>
            </div>
        </DialogActions>
      </Dialog>
      </div> */}











                                                        
                                                    
                                                    {/* </div> */}
                                                </div>
                                  
                                  
                            ))}
                        </div>

                        <div className="text-center pt-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <a className="view-more-hover" href="/productsview">
                                <h2 className="Product-more">View More <span><img className="Product-more-arrow"
                                    src="./assets/icon-awesome-arrow-circle-right@1x.png" alt="" /></span></h2>
                            </a>
                        </div>
                    </section>

                    <section>
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-6 pt-5 pb-5">
                                <div className="">
                                    <img className="home-section-3-img rotateme" width="100%" src="./assets/subtraction-1@1x-12.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 pb-5 ">
                                <h2 className="home-section-3-title pl-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">About</h2>
                                <h1 className="home-section-3-title-1 pt-4 pb-4 pl-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Chennai Caters</h1>
                                <p className="home-section-3-content pr-3 pl-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">

                                Chennai Caters has been serving numerous authentic batter varieties starting from 2008. This tasty cum appetizing adventure commenced as 
                                a family-run business furthermore extended the mouth-watering achievement to every nook and corner only with the vastest support from our
                                 the best of the bunch consumers and retailers. Now, we are the greatest independent "Dosa Batter" manufacturers in North America, plating 
                                 the customers with love fused batter.
                                </p>
                                <div className="text-center  mt-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <a href="/aboutus" className="home-header-button">Read More</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-center home-section-4-bg-color pt-5 pb-5">
                        <div>
                            <h1 className="home-section-4-title wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Why Choose Us</h1>
                            <div className="home-section-4-title-underline wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s"></div>
                            <p className="home-section-4-content pt-5 pb-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s"><span className="home-whyus"> Love + Care + Natural + Ingredients = Healthy Food</span>
                               <br/> You can feel your taste buds long for the next bite until you finish your satisfying meal. Wanna experience this mouthful thrilling chews? Chennai Caters to serve you hot!!!

                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <div>
                                    <img className="home-section-4-img-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/ready-to-cook@1x.png" alt="" />
                                    <h2 className="home-section-4-title-1 pt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Ready to Cook</h2>
                                    <p className="home-section-4-content pt-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">You are free from the monotonous long waits for the batter to get fermented.
                                     Shift to instant. Just unseal, stir, and pour. Never procrastinate good things!
                                    </p>
                                </div>
                                <div className="pt-5">
                                    <img className="home-section-4-img-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/health-care@1x.png" alt="" />
                                    <h2 className="home-section-4-title-1 pt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">100% Natural</h2>
                                    <p className="home-section-4-content pt-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Made with natural earth commodities and free from chemicals and preservatives. Smell the pure form of food through a fantastic aroma.
Still doubtful? Ask your gut for purity!

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="pt-5">
                                    <img className="home-section-4-center-img wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/dosa-3-2@1x-1.png" width="100%" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div>
                                    <img className="home-section-4-img-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/natural@1x.png" alt="" />
                                    <h2 className="home-section-4-title-1 pt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Super Health</h2>
                                    <p className="home-section-4-content pt-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">The coinciding spot where taste and health blend together, soothes,
                                     and triggers happiness over the whole body. Eat the best, feel your best.
                                    </p>
                                </div>
                                <div className="pt-5">
                                    <img className="home-section-4-img-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/premium@1x.png" alt="" />
                                    <h2 className="home-section-4-title-1 pt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Premium Quality</h2>
                                    <p className="home-section-4-content pt-2 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">Give your tongue and stomach a lavish treat with our premium quality product.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="pt-5">
                                <img className="home-section-4-center-img-1 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s" src="./assets/dosa-3-2@1x-1.png" width="60%" alt="" />
                            </div>
                        </div>
                    </section>

                </div>
                <div className="home_footer footer-bg-color">
                    <Footer></Footer>
                    </div>
             </section>
                )}
                </div>
            </div>

        )
    }
}

export default Fronthead
