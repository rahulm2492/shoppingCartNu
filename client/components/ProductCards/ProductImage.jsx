import React from 'react';
import PropTypes from 'prop-types';



class ProductImage extends React.Component {
  constructor(props){
    super(props);
   
 }
 

 

  render() {
    const {img} = this.props;
  
       return (
        
            <div className = 'productImage'>
              <img src={img}/>
            </div>
     
       );
  }



}


ProductImage.defaultProps = {
 img: null,
 altText: null,
};

ProductImage.propTypes = {
 img : PropTypes.string,
 altText: PropTypes.string
}


export default ProductImage;