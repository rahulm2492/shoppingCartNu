import React from 'react';
import PropTypes from 'prop-types';

class InputControl extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    let properties = {};
    this.props.max ? properties.max = this.props.max : null;
    this.props.min ? properties.min = this.props.min : null;
    this.props.value ? properties.value = this.props.value : null;
    this.props.step ? properties.step = this.props.step : null;
    const {
        type,
        placeHolder ,
        onChange,
        onBlur,
        name,

    }= this.props
    
    return (
      <input 
        type={type}
        name={name}
        placeholder ={placeHolder}
        onChange ={onChange}
        onBlur= {onBlur}
     
        {...properties}
      >

      </input>
    )
  }
}

InputControl.defaultProps = {
  placeHolder: '',
  onChange: '',
  value: '',
  min: '',
  max: '',
  type: 'text'
};

InputControl.propTypes = {
  placeHolder:PropTypes.string,
  onChange:PropTypes.func,
  onBlur:PropTypes.func,
  value:PropTypes.string,
  min:PropTypes.number,
  max:PropTypes.number,
  step:PropTypes.number,
  type:PropTypes.string,
  name:PropTypes.string
}

export default InputControl;