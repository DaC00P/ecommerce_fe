import React from 'react';
import Select from 'react-select';
export const EMAIL_REGEX = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/);

export const renderTextField = (props) => (
  <div style={{position:'relative'}}>
    <input {...props.input} placeholder={props.placeholder} type={props.type} className={props.className} disabled={props.disabled}/>
    {props.meta.error && props.meta.touched && <div className="validation-error">{props.meta.error}</div>}
  </div>
)

export const renderSelectField = (props) => (
  <div style={{position:'relative'}}>
    <Select
      {...props}
      value={props.input.value}
      onChange={(value) => props.input.onChange(value ? value.value : value)}
      onBlur={() => props.input.onBlur(props.input.value ? props.input.value.value : props.input.value)}
      options={props.options}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
    {props.meta.error && props.meta.touched && <div className="validation-error">{props.meta.error}</div>}
  </div>
)

export const validate = (values, validations) => {
  const errors = {}
  if(validations.required) {
    validations.required.fields.forEach((field) => {
      if(!values[field]) {
        errors[field] = 'Required';
      }
    })
  }

  if(validations.charCount) {
    validations.charCount.fields.forEach((field) => {
      if(values[field]) {
        if(validations.charCount.min && values[field].length < validations.charCount.min) {
          errors[field] = `Must be at least ${validations.charCount.min} characters`;
        }
        if(validations.charCount.max && values[field].length > validations.charCount.max) {
          errors[field] = `Must be ${validations.charCount.max} characters or less`;
        }
      }
    })
  }

  if(validations.match) {
    validations.match.fields.forEach((field) => {
      if(values[field] && values[field] != values[validations.match.toMatch]) {
        errors[field] = `Does not match ${validations.match.toMatch}`;
      }
    })
  }

  if(validations.isNumber) {
    validations.isNumber.fields.forEach((field) => {
      if(values[field] && isNaN(values[field])) {
        errors[field] = `Must be a number`;
      }
    })
  }

  if(validations.email) {
    validations.email.fields.forEach((field) => {
      if(values[field] && !EMAIL_REGEX.test(values[field])) {
        errors[field] = `Invalid email`;
      }
    })
  }

  return errors
}
