import {roundTo} from '../utils'; // helper function
//Shopping Cart

//{unit:0,price:0,productName:name, productId:id} Product Structure

 class checkoutCart {
    constructor(){
        this.originalTotal ='0.00';
        this.discountedTotal ='0.00'
        this.newQty = null;
        this.bucket=[];
      
    }
    
    totalPrice(){
        return this.bucket.reduce((total,product)=> parseFloat(product.originalTotal) + total , 0.00)
    }
    //Add New Product and Update Cart with New Total
     addProduct(newProduct,discount){
        
        const {unit, price,productName, productId  } = newProduct;

        if( !unit || price < 0 || !productName  || !productId ){
          
            return;
        }

        //product Already Exist
        const getIndex=this.removeProduct(newProduct);
      

        //publish Total
        this.originalTotal = roundTo(unit*price);
        
      
        if(discount){

            let discountedPrice = this.getDiscountedPrice(unit,price,discount);
            this.discountedTotal = roundTo(discountedPrice && discountedPrice.newPrice || price);
            this.newQty = discountedPrice && discountedPrice.newQty || unit;
        }

        getIndex >=0 
        ? this.bucket.splice(getIndex,0,{...newProduct, discountedTotal:this.discountedTotal, newQty:this.newQty, originalTotal:this.originalTotal})
        : this.bucket.push({...newProduct, discountedTotal:this.discountedTotal, newQty:this.newQty, originalTotal:this.originalTotal});
          // eslint-disable-next-line no-console
        console.log(this.bucket);
        
     }

     removeProduct(existingProduct){
         const findItem = this.bucket.findIndex(item => item.productId === existingProduct.productId);
         findItem >= 0 && this.bucket.splice(findItem,1);
         return findItem;
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
             bucket:this.bucket,
             totalPrice: roundTo(this.totalPrice())
            };
     }

}

export default new checkoutCart();
    