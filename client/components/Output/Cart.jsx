import React from 'react';
import PropTypes from 'prop-types';



class Cart extends React.Component {
  constructor(props){
    super(props);
   
 }
 

 

  render() {
    const {bucket} = this.props.cartData ;

    
       return (
        
            <div className = 'productCart'>
            <div>
            <span>Product Name</span>
            <span>Price Per Unit</span>
            <span>Unit Purchased</span>
            <span>Cost of Product(s)</span>
            </div>
             {
              bucket &&  bucket.bucket.map(product => 
              <div key={product.id}>
              <span>{product.productName}</span>
              <span>{product.price}</span>
              <span>{product.unit}</span>
              <span>{product.originalTotal}</span>
              </div>
              )
}

       
            </div>
     
       );
  }



}


Cart.defaultProps = {
 cartData: []
};

Cart.propTypes = {
 cartData : PropTypes.object,
}


export default Cart;