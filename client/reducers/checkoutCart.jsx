import {roundTo} from '../utils'; // helper function
//Shopping Cart

//{unit:0,price:0,productName:name, productId:id} Product Structure

 class checkoutCart {
    constructor(){
        this.originalTotal ='0.00';
        this.discountedTotal ='0.00'
        this.newQty = null;
      
    }

    //Add New Product and Update Cart with New Total
     addProduct(newProduct,discount){
        
        const {unit, price,productName, productId  } = newProduct;

        if( !unit || price < 0 || !productName  || !productId ){
          
            return;
        }

        //publish Total
        this.originalTotal = roundTo(unit*price);
        
      
        if(discount){

            let discountedPrice = this.getDiscountedPrice(unit,price,discount);
            this.discountedTotal = roundTo(discountedPrice && discountedPrice.newPrice || price);
            this.newQty = discountedPrice && discountedPrice.newQty || unit;
        }
        
        
     }

    //Add Tax
    getDiscountedPrice(unit,price,discount){
      if(discount.moreOnLess){
           return this.getMoreOnLess(unit,price,discount);

      } else if(discount.discountPrice) {
          return this.getPriceDiscount(unit,discount);

      } else if(discount.minPurchaseQuantity){
          return this.minPurchaseQuantity(unit,price,discount)
      }
     }
    

     getPriceDiscount(unit, discount){
        return {
            newPrice:discount.discountPrice * unit
        }
     }
     minPurchaseQuantity(unit, price, discount){
         if(unit>=discount.minPurchaseQuantity){
             return {newPrice:discount.minPurchaseDiscount * unit}
         }
     }

     getMoreOnLess(unit,price, discount){
         const higherUnit =discount.moreOnLess[0];
         const lowerUnit =discount.moreOnLess[1];
         const getPairs = parseInt(unit/lowerUnit);
         return {
             newQty:(getPairs*(higherUnit-lowerUnit))+unit,
             newPrice:unit*price
         }
     }
    
     

     getTotal(){
         return { 
             originalTotal :this.originalTotal, 
             discountedTotal:this.discountedTotal, 
             newQty:this.newQty
            };
     }

}

export default new checkoutCart();
    