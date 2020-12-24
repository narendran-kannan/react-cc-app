
import ContactUs from "./components/Conductform";
import Fronthead from './components/Fronthead';
import Header from './components/Header';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Product from './screens/Product';
import Productscreen from './screens/Productscreen';

import Aboutus from './screens/Aboutus';
import Contactus from './screens/Contactus';
import Productdetails from './screens/Productdetails';
import Productdescription from './screens/Productdescription';

function App() {
  return (
    <div>
      {/* <ContactUs/>  */}
      <BrowserRouter>
       <Route exact path= '/' component={Fronthead}/>
        <Route path='/Toptrendproduct/:productID' component={Product}/>
        <Route path='/productsview' component={Productscreen}></Route>
        {/* <Route path='/productscreen/:productID' component={Fproduct}></Route> */}
        <Route path='/aboutus' component={Aboutus}></Route>
        <Route path='/contactus' component={Contactus}></Route>
        <Route path='/productdetails/:productID' component={Productdetails}></Route>



        {/* <Route path='/description' component={Productdescription}></Route> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
