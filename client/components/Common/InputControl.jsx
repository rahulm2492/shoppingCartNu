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
     this.props.pattern ? properties.pattern = this.props.pattern : null;
    const {
        type,
        placeHolder ,
        onChange,
        onBlur,
        name,
        required

    }= this.props
    
    return (
      <input 
        type={type}
        name={name}
        placeholder ={placeHolder}
        onChange ={onChange}
        onBlur= {onBlur}
        required={required}
     
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
  type: 'text',
  pattern:'',
};

InputControl.propTypes = {
  placeHolder:PropTypes.string,
  pattern:PropTypes.string,
  onChange:PropTypes.oneOfType[PropTypes.func , PropTypes.string],
  onBlur:PropTypes.func,
  value:PropTypes.string,
  min:PropTypes.string,
  max:PropTypes.string,
  step:PropTypes.number,
  type:PropTypes.string,
  name:PropTypes.string,
  required:PropTypes.bool
}

export default InputControl;