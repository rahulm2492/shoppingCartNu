import React from 'react';
import PropTypes from 'prop-types';



class Cart extends React.Component {
  constructor(props){
    super(props);
   
 }
 

 

  render() {
    const {img, altText} = this.props;
  
       return (
        
            <div className = 'productImage'>
              <img src={img} altText={altText}/>
            </div>
     
       );
  }



}


Cart.defaultProps = {
 img: null,
 altText: null,
};

Cart.propTypes = {
 img : PropTypes.string,
 altText: PropTypes.string
}


export default Cart;