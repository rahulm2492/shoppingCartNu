import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCards/ProductCard.jsx';
import productData from '../../mock-data/product.jsx';
// import PriceList from '../../mock-data/price.jsx';



class AdsContainer extends React.Component {
  constructor(props){
    super(props);
   
 }
 

 

  render() {
  
       return (
        
            <div className = 'adsContainer'>
            <div>
              {
                productData.map((data, index)=>
                    <ProductCard 
                     prodData = {data}
                     key={index}
                     pricePerUnit={this.props.pricingRules && this.props.pricingRules.price[data.id]}
                     discount={this.props.pricingRules && this.props.pricingRules.discount}
                     onAddToCart={this.props.onAddToCart}
                     {...this.props.adsData}
                     
                     />
                )
              }
              </div>
            </div>
     
       );
  }



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