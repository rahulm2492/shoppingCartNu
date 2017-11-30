const price = {

"Classic":"269.99",
"Standout":"322.99",
"Premium":"394.99",

"discountedCustomers":{
 "apple":{
     "Standout":{
         "discountPrice": "299.99"
     }
     
 },
 "ford":{
    "Classic":{
        "moreOnLess": ["5","4"]
    },
    "Standout":{
        "discountPrice": "309.99"
    },
    "Premium":{
        "minPurchaseQuantity":"3",
        "minPurchaseDiscount":"389.99"
    }
 },
 "nike":{
    "Premium":{
        "minPurchaseQuantity":"4",
        "minPurchaseDiscount":"379.99"
    }
 },
 "unilever":{
    "Classic":{
        "moreOnLess": ["3","2"]
    }
 }

}
}
export default price;