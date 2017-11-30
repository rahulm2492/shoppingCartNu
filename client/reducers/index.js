
export default function(state={} , action)
{
  
    switch (action.type) {
    case 'ADDTOCART':
        {
          
       return {...state, [action.val.id]:{
         ...state[action.val.id],
         computedPrice:'500',
         computedQty:action.val.qty,
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

    case 'ARRIVAL_CITY':
     return Object.assign({},state, {arrivalCity:action.val})

    case 'DEPARTURE_DATE':
     return Object.assign({},state,{departureDate:action.val})

    case 'RETURN_DATE':
     return Object.assign({},state,{returnDate:action.val})

     case 'PASSENGERS' :
     return Object.assign({},state,{passengers:action.val})

     case 'SET_TAB' :
     return Object.assign({},state, {tabSelected:action.val})

     case 'FILTER' :
     return Object.assign({},state, {data:action.items})

      case 'SUBMIT' :
     return Object.assign({},state, {submitClicked:action.val})

     case 'RANGE' :
     return Object.assign({},state, {leftRange:action.val[1]}, {rightRange:action.val[0]})

    default:
      return state

    }
}

