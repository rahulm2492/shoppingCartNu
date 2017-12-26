import React from 'react';
import PropTypes from 'prop-types';
import checkoutCart from '../../utils/checkoutCart';



const Cart = (props) => {
 const removeItem = (e,item) => {

   checkoutCart.removeProduct(item);
   props.onAddToCart({
    data:{
      ...checkoutCart.getTotal()
    }
 })
 }
    const {bucket} = props.cartData ;
    const {name,address} = props.customerDetail;

    
       return (
        
            <div className = 'productCart'>
            <div>
            <div>
            <span>Product Name</span>
            <span>Price Per Unit</span>
            <span>Unit Purchased</span>
            <span>Cost of Product(s)</span>
             <span>Remove Item From Cart</span>
            
            </div>
             {
              bucket &&  bucket.bucket.map(product => 
              <div key={product.productId}>
              <span>{product.productName}</span>
              <span>{product.price}</span>
              <span>{product.unit}</span>
              <span>{product.originalTotal}</span>
              <span onClick ={(e)=>removeItem(e,{productId:product.productId})}>Remove</span>
              </div>
              )
             }
            </div>
            <div className = 'deliveryDetails'>
                <h5>Billing Details</h5>
                <p><span>Name:</span> <span>{name}</span></p>
                <p><span>Billing Address:</span> <span>{address}</span></p>
                <p><span>Total Amount: </span><span>$ {bucket && bucket.totalPrice}</span></p>
               <h2>Happy Shopping</h2>
            </div>
            </div>
            
     
       );
  }






Cart.defaultProps = {
 cartData: [],
 customerDetail:{}
};

Cart.propTypes = {
 cartData : PropTypes.object,
onAddToCart:PropTypes.func,
customerDetail:PropTypes.object,

}


export default Cart;