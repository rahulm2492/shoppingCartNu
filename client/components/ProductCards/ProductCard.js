import React from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';




const ProductCard = (props) => {

    const {prodData} = props;
  
       return (
        
            <div className = 'productCard'>
                <ProductImage img={prodData.img} altText={prodData.title}/>
                <ProductDescription 
                  desc={prodData.desc} 
                  title={prodData.title} 
                  productId={prodData.id}
                  discount={prodData.discount}
                  {...props}
                  />
            </div>
     
       );
  }






ProductCard.defaultProps = {
 prodData: null,
 
};

ProductCard.propTypes = {
 prodData : PropTypes.object,

}


export default ProductCard;