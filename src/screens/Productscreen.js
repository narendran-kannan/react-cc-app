import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
import Loading from '../components/Loading';
import Popup from 'reactjs-popup';



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';







export class Productscreen extends Component {

    // var[open, setOpen] = React.useState(false);



    constructor(props) {
        super(props)
        this.state = {
            cc: [],
            productCopy: [],
            all: [],
            isLoading: true,
            open: false,
        };
       this.handleClickOpen=this.handleClickOpen.bind(this);
       this.handleClose=this.handleClose.bind(this);
    }

    
    handleClickOpen = (e) => {
        this.setState({open:true});
    };

    handleClose = () => {
        this.setState({open:false});
    };

    componentDidMount() {
        // this.setState({isLoading: false});

        axios.get('http://34.86.60.208/api/p/')
            .then(res => {
                this.setState({
                    cc: res.data,
                    productCopy: res.data,
                    isLoading: false
                });
                console.log(res.data);

                console.log(this.state.productCopy);

            })

    }


    handleBtn = (e) => {

        console.log(e.target.value);
        var productCopy;
        if (e.target.value === "All") {
            productCopy = this.state.cc;
        }
        else {
            productCopy = this.state.cc.filter(item => item.product_catogery.toLowerCase() === e.target.value.toLowerCase())
        }
        this.setState({
            productCopy: productCopy
        })
    }

 


    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <Loading></Loading>
                ) : (
                        <div>
                            <Header></Header>
                            <section>
                                <div className="pt-5 pl-5 pb-5">
                                    <h1 className="home-section-2-title">Our Products</h1>
                                    <div className="product-section-2-title-underline"></div>
                                </div>

                                <div className="text-center">
                                    <div className="">
                                        <button type="submit" className="product-filter-button mb-5 ml-2" value="All" onClick={this.handleBtn}>All</button>
                                        <button type="submit" className="product-filter-button mb-5 ml-2" value="dosa" onClick={this.handleBtn}>Dosa</button>
                                        <button type="submit" className="product-filter-button mb-5 ml-2" value="idly" onClick={this.handleBtn}>Idly</button>
                                    </div>

                                    <div className="">
                                        <div className="row">
                                            {this.state.productCopy.map((product) => (
                                                <div className="col-lg-3">
                                                    <div className="product-1 m-5 pb-4">
                                                        <a href={`/productdetails/${product.id}`} className="product-href"  >
                                                            <img className="product-img" src={product.product_img} width="100%" alt="" />
                                                            <h2 className="product-name">{product.product_name}</h2> </a>
                                                        <a href={`/productdetails/${product.id}`} className="product-button">Products <span><img className="product-button-arrow"
                                                            src="./assets/icon-awesome-arrow-up@1x.png" alt="" /></span></a>
                                                        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>

                                                            {/* <a href="#"  className="product-button"  onClick={this.handleClickOpen}>
                                                            Products <span><img className="product-button-arrow"
                                                            src="./assets/icon-awesome-arrow-up@1x.png" alt="" /></span> 
                                                            </a> */}
                                                             {/* </Button> */}
                                                            {/* </a> */}

                                                        {/* <Popup trigger={<button  className="product-button"> <span><img className="product-button-arrow"
                                                                src="./assets/icon-awesome-arrow-up@1x.png" alt="" /></span>Product</button>} position="right center">
                                                           */}



      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Product Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className="">
                                                            <section className="">
                                                                <div className=" pl-5">
                                                                    {/* <h1 className="home-section-2-title">Our Products</h1>
                                                                    <div className="product-section-2-title-underline"></div> */}
                                                                    <div className="text-right">
                                                                    {/* <Button onClick={this.handleClose} color="" autoFocus> */}
                                                                        {/* <a href="/productsview" > */}
                                                                            <img onClick={this.handleClose} className="intmark " src="../assets/icon-material-cancel@1x.png" alt="" />
                                                                        {/* </a> */}
                                                                        {/* </Button> */}
                                                                    </div>
                                                                </div>

                                                                {/* <div className="row"> */}
                                                                    {/* <div className="col-lg-6"> */}
                                                                        <img className="Product-details-bg-shape" src="../assets/shape-bg@1x.png" alt="" />
                                                                        <div className=" product-details-img-bg text-center">
                                                                            <img className="product-details-img" src={product.product_img} alt="" />
                                                                        </div>
                                                                    {/* </div> */}
                                                                    {/* <div className="col-lg-6 pb-5 pl-4"> */}
                                                                        <h1 className="product-details-title">
                                                                            {product.product_name}
                                                                        </h1>
                                                                        <p className=" product-details-content">
                                                                            {product.product_description}
                                                                        </p>
                                                                        
                                                                    {/* </div> */}

                                                                {/* </div> */}

                                                            </section>
                                                            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button> */}
          {/* <Button onClick={this.handleClose} color="primary" autoFocus>
            Close
          </Button> */}
          <div className="text-center ">
                <a href="https://bit.ly/2WHP26e" className="Product-details-button-12 ">Enquire now</a>
            </div>
        </DialogActions>
      </Dialog>











                                                        
                                                    
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="product-footer-above-line  mt-5 mb-5"></div>

                            <Footer></Footer>
                        </div>
                    )}
            </div>
        )
    }
}

export default Productscreen
