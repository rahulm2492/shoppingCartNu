import React from 'react';
import PropTypes from 'prop-types';
import InputControl from '../Common/InputControl.jsx';



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
     qty:e.target.value
   })
 }
 sendData(){
  this.props.onAddToCart({
    qty:this.state.qty,
    id:this.props.productId,
    name:this.props.title,
    price:this.props.pricePerUnit
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
 computedPrice:PropTypes.string,
 computedQty:PropTypes.string,
 onAddToCart:PropTypes.func,
}


export default ProductDescription;