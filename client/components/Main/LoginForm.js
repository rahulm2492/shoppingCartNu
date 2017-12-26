import React from 'react';
import InputControl from '../Common/InputControl'
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.setData = this.setData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.state={
      email:null,
      phone:null,
      name:null,
      address:null,
    }
   
 }
 
 sendData(){
   this.props.onCustomerDetail(this.state);
 }

 setData(e){
   if(e.target.getAttribute('name')==='custName'){
     this.setState({name:e.target.value})
   } else if(e.target.getAttribute('name')==='custMail') {
    this.setState({email:e.target.value})
   } else if(e.target.getAttribute('name')==='custNumber') {
    this.setState({phone:e.target.value})
  } else  {
    this.setState({address:e.target.value})
  }
 }

  render() {
    const {name, email, address, phone} = this.state;
   let valuesFilled = name && email && address && phone;
   const submitButtonClass = valuesFilled ? 'enabled' : 'disabled'
       return (
        
            <div className = 'loginform'>
                <h5>Enter Customer Detail</h5>
                <p>All inputs are mandatory (*)</p>
                <label name='custName'>Name: </label>
                <InputControl  name='custName' type='text' placeHolder ='Enter Customer Name' onBlur={this.setData} required/>

                <label name='custMail'>E-Mail: </label>
                <InputControl name='custMail' type='email' placeHolder ='Enter Customer Email' onBlur={this.setData} required/>
                <label name='custNumber'>Phone: </label>
                <InputControl name='custNumber' type='text' placeHolder ='Enter Customer Phone' onBlur={this.setData} pattern="[1-9][0-9]{9}" required/>
                <label name='custAdd'>Address: </label>
                <InputControl name='custAdd' type='textbox' placeHolder ='Enter Customer Address' onChange={this.setData} required/>
                <input type='submit' disabled={!valuesFilled} onClick={this.sendData} className = {submitButtonClass}/>
            </div>
     
       );
  }



}


LoginForm.defaultProps = {
  onCustomerDetail: null,
};

LoginForm.propTypes = {
 onCustomerDetail : PropTypes.func,
 
}


export default LoginForm;