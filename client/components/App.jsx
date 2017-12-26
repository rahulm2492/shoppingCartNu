import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './Container/LoginForm.jsx'
import AdsContainer from './Container/AdsContainer.jsx'
import Cart from './Output/Cart.jsx';
import Header from './Common/Header.jsx';
import getPricing  from '../actions/thunkAction.js';
import {addtoCart} from '../actions'


class App extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='checkout container'>
        <Header/>
        <LoginForm {...this.props}/>
        <Cart {...this.props}/>
        <AdsContainer {...this.props}/>

      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    adsData: state,
    customerDetail: state.customerDetail,
    pricingRules: state.pricingRules,
    cartData: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: val => dispatch(addtoCart(val)),
    onCustomerDetail : val => dispatch(getPricing (val))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);