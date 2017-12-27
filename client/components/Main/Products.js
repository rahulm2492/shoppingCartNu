import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCards/ProductCard';
import productData from '../../mock-data/product';



const AdsContainer =(props) => {
  
  
       return (
        
            <div className = 'adsContainer'>
            <div>
              {
                productData.map((data, index)=>
                    <ProductCard 
                     prodData = {data}
                     key={index}
                     pricePerUnit={props.pricingRules && props.pricingRules.price[data.id]}
                     discount={props.pricingRules && props.pricingRules.discount}
                     onAddToCart={props.onAddToCart}
                     {...props.adsData}
                     
                     />
                )
              }
              </div>
            </div>
     
       );
  }






AdsContainer.defaultProps = {
 adsData: null,
 setTab: null,
};

AdsContainer.propTypes = {
 adsData : PropTypes.object,
 onAddToCart:PropTypes.func,
 pricingRules:PropTypes.object
}


export default AdsContainer;