import {roundTo} from '../utils'; // helper function
//Shopping Cart

//{unit:0,price:0,productName:name, productId:id} Product Structure

export class checkoutCart {
    constructor(discount){
        this.Cart = [];
        this.originalTotal ='0.00';
        this.discountedTotal ='0.00'
        this.newQty = null;
        
        this.discount=discount;
    }

    //Add New Product and Update Cart with New Total
     addProduct(newProduct){
        
        const {unit, price,productName, productId  } = newProduct;

        if( !unit || price < 0 || !productName  || !productId ){
          
            return;
        }

        let cart = this.Cart.slice();
        let productExist= cart.findIndex((item)=>item.productId === newProduct.productId);
        
        // Get Exist Cart
        if(productExist>=0){
            let [oldproduct]  = cart.splice(cart[productExist],1);//
            oldproduct.unit = oldproduct.unit + newProduct.unit // manipulate existed product if exist
            cart.push(oldproduct);
        } else {
            cart.push(newProduct);
        }

        //publish Cart
        this.Cart = [];//Empty the exist cart;
        this.Cart = cart.splice(0);//Fill it with new one
        
        //publish Total
        let totalPrice = this.Cart.reduce((total,item ) => total + (item.price*item.unit),0)
         // eslint-disable-next-line no-console
        console.log(this.discount);
        if(this.discount && this.discount[productId]){
             
            
            this.discountedPrice = this.getDiscountedPrice(unit,price,this.discount[productId]);
        }
        this.originaltotal= roundTo(totalPrice);  
        this.discountedTotal = roundTo(this.discountedPrice.newPrice);
        this.newQty = this.discountedPrice.newQty;
     }

    //Add Tax
    getDiscountedPrice(unit,price,discount){
      if(discount.moreOnLess){
           this.getMoreOnLess(unit,price.discount);
      } else if(discount.discountedPrice) {
          this.getPriceDiscount(unit,discount);
      } else if(discount.minPurchaseQuantity){
          this.minPurchaseQuantity(unit,price,discount)
      }
     }
    

     getPriceDiscount(unit, discount){
        return {
            newPrice:discount.discountPrice * unit
        }
     }
     minPurchaseQuantity(unit, discount){
         if(unit>=discount.minPurchaseQuantity){
             return {newPrice:discount.minPurchasePrice * unit}
         }
     }

     getMoreOnLess(unit,price, discount){
         const higherUnit =discount.moreOnLess[0];
         const lowerUnit =discount.moreOnLess[1];
         const getPairs = parseInt(unit/lowerUnit);
         return {
             newQty:getPairs*(higherUnit-lowerUnit),
             newPrice:unit*price
         }
     }
    
     getCart(){
         return this.Cart;
     }

     getTotal(){
         return { originalTotal :this.originalTotal, discountedTotal:this.discountedTotal, newQty:this.newQty};
     }

}
