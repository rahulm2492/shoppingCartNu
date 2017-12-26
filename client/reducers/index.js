
export default function(state={} , action)
{
  
    switch (action.type) {
    case 'ADDTOCART':
        {
          
       return {...state,'cart':{
         ...state.cart,
         bucket:action.val.data
       } }}
    case 'LOADING_ERROR':
       return Object.assign({},state ,{error:action.data},{status:action.status})

    case 'LOADING_DATA':
       return Object.assign({},state ,{status:action.status})

    case 'LOADED_DATA':
    
       return {...state, 'pricingRules':{
        ...state.pricingRules,
        price:action.val.price,
        discount:action.val.discount
      } }
    case 'CUSTOMERDETAIL':
      return  {...state, customerDetail:{
        ...state.customerDetail,
        email:action.val.email,
        phone:action.val.phone,
        name:action.val.name,
        address:action.val.address,
      } }

    
    default:
      return state

    }
}

