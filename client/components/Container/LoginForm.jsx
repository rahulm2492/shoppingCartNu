import React from 'react';
import InputControl from '../Common/InputControl.jsx'
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
   let valuesFilled = name && email && address && phone
       return (
        
            <div className = 'loginform'>
                <h5>Enter Customer Detail</h5>
                <label name='custName'>Name: </label>
                <InputControl  name='custName' type='text' placeHolder ='Enter Customer Name' onBlur={this.setData}/>

                <label name='custMail'>E-Mail: </label>
                <InputControl name='custMail' type='mail' placeHolder ='Enter Customer Email' onBlur={this.setData}/>
                <label name='custNumber'>Phone: </label>
                <InputControl name='custNumber' type='text' placeHolder ='Enter Customer Phone' onBlur={this.setData}/>
                <label name='custAdd'>Address: </label>
                <InputControl name='custAdd' type='textbox' placeHolder ='Enter Customer Address' onChange={this.setData}/>
                <input type='submit' disabled={!valuesFilled} onClick={this.sendData}/>
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