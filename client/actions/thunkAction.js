import {dataLoaded ,dataLoading, loadingError, submitClicked, customerDetail} from './index.js'

export default  (data) => {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(dataLoading(true));
        dispatch(customerDetail(data));
       return fetch('http://localhost:80/price/'+data.name)
        .then((response) => {
            if (!response.ok) {
                   dispatch(loadingError({
                       data:response.statusText,
                       status: false
                    }));
                    throw new Error(response.statusText);
                    
                }

                

                return response;
        })
        .then((response) => response.json())
        .then((values) => {
             dispatch(dataLoaded({price:values.price,discount:values.discount}));
            
           
      })
      .catch(e => dispatch(loadingError({data:e,status:false})))
    };
}

export function filter(data,state){
  const {returnDate, departureDate, departureCity, arrivalCity,leftRange, rightRange }   = state;
  let lowerPrice = leftRange ;
  let higherPrice = rightRange;
  if(leftRange >= rightRange) {
    lowerPrice = rightRange;
    higherPrice = leftRange;
  }
  let a=[],b=[];
   data.forEach((item)=>{
    if(departureDate === item.date 
    && departureCity === item.departureCity 
    && arrivalCity === item.arrivalCity 
    && item.price >= lowerPrice
    && item.price <= higherPrice
    ){
      a.push(item);
    }
    if(returnDate === item.date 
    && arrivalCity === item.departureCity 
    && departureCity === item.arrivalCity
    && item.price >= lowerPrice
    && item.price <= higherPrice
     ){
      b.push(item);
    }
  });
  return [a,b];

}