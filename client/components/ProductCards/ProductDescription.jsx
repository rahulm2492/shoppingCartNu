import React from 'react';
import PropTypes from 'prop-types';
import InputControl from '../Common/InputControl.jsx';
import checkoutCart from '../../reducers/checkoutCart.jsx';

class ProductDescription extends React.Component {
  constructor(props){
    super(props);
    this.changeQty = this.changeQty.bind(this);
    this.sendData = this.sendData.bind(this);
    this.state={
      qty:0
    }
   
 }
 

 changeQty(e){
   this.setState({
     qty:parseInt(e.target.value)
   })
 }

 sendData(){
   const {pricePerUnit, title, productId, discount} = this.props;

   checkoutCart.addProduct({
    unit : this.state.qty,
    price: pricePerUnit,
    productName:title,
    productId: productId,
  },discount && discount[productId]);
   // eslint-disable-next-line no-console
  console.log(checkoutCart.getTotal());
  this.props.onAddToCart({
    id:this.props.productId,
    data:{
      ...checkoutCart.getTotal(),
      originalUnit:this.state.qty,
      productName:title
    }
 })
}

  render() {
    const {title, desc, pricePerUnit} = this.props;
  
       return (
        
            <div className = 'productDescription'>
               <h4>{title}</h4>
               <p>{desc}</p>
               <h4 className="price">${pricePerUnit}</h4>
               <label name="Qty">Quantity:</label>
               <InputControl  name='custName' type='number' placeHolder ='Qty' min={1} max={100} onChange={this.changeQty}/>
               <button title='Place Order' disabled={!this.state.qty} onClick={this.sendData}>Add To Cart</button>
            </div>
     
       );
  }



}


ProductDescription.defaultProps = {
  title: null,
  desc: null,
  pricePerUnit:null
};

ProductDescription.propTypes = {
 title : PropTypes.string,
 desc: PropTypes.string,
 pricePerUnit:PropTypes.string,
 productId:PropTypes.string,
 discount: PropTypes.object,
 onAddToCart:PropTypes.func,
}


export default ProductDescription;