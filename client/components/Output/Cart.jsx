import React from 'react';
import PropTypes from 'prop-types';
import checkoutCart from '../../reducers/checkoutCart.jsx';



class Cart extends React.Component {
  constructor(props){
    super(props);
    this.removeitem = this.removeItem.bind(this);
   
 }
 

 removeItem(e,item){

   checkoutCart.removeProduct(item);
   this.props.onAddToCart({
    data:{
      ...checkoutCart.getTotal()
    }
 })
 }

  render() {
    const {bucket} = this.props.cartData ;
    const {name,address} = this.props.customerDetail;

    
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
              <span onClick ={(e)=>this.removeItem(e,{productId:product.productId})}>Remove</span>
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