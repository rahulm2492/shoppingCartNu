import React from 'react';
import PropTypes from 'prop-types';

const InputControl = (props) => {
  
    let properties = {};
    props.max ? properties.max = props.max : null;
    props.min ? properties.min = props.min : null;
    props.value ? properties.value = props.value : null;
    props.step ? properties.step = props.step : null;
    props.pattern ? properties.pattern = props.pattern : null;
    const {
        type,
        placeHolder ,
        onChange,
        onBlur,
        name,
        required

    }= props
    
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