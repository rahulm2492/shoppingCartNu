import React from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './ProductDescription.jsx';
import ProductImage from './ProductImage.jsx';




class ProductCard extends React.Component {
  constructor(props){
    super(props);
   
 }
 

 

  render() {
    const {prodData} = this.props;
  
       return (
        
            <div className = 'productCard'>
                <ProductImage img={prodData.img} altText={prodData.title}/>
                <ProductDescription 
                  desc={prodData.desc} 
                  title={prodData.title} 
                  productId={prodData.id}
                  {...this.props}
                  />
            </div>
     
       );
  }



}


ProductCard.defaultProps = {
 prodData: null,
 
};

ProductCard.propTypes = {
 prodData : PropTypes.object,

}


export default ProductCard;