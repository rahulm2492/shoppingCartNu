import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './Container/LoginForm.jsx'
import AdsContainer from './Container/AdsContainer.jsx'
import Cart from './Output/Cart.jsx';
import Header from './Common/Header.jsx';
import getPricing  from '../actions/thunkAction.js';
import {addtoCart} from '../actions';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='checkout container'>
        <Header/>
         { !this.props.pricingRules && <LoginForm {...this.props}/>}
        { this.props.pricingRules && <Cart {...this.props}/>}
       { this.props.pricingRules &&  <AdsContainer {...this.props}/>}

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
App.propTypes = {
 pricingRules:PropTypes.object
}


export default connect(mapStateToProps, mapDispatchToProps)(App);