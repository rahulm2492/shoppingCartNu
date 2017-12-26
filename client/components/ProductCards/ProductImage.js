import React from 'react';
import PropTypes from 'prop-types';



const ProductImage = (props) => {
 
    const {img} = props;
  
       return (
        
            <div className = 'productImage'>
              <img src={img}/>
            </div>
     
       );
  }


ProductImage.defaultProps = {
 img: null,
};

ProductImage.propTypes = {
 img : PropTypes.string
}


export default ProductImage;