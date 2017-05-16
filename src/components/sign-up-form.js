import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { browserHistory, Link } from 'react-router';
import { renderTextField, validate } from '../util/form-fields';
import { connect } from 'react-redux';

import { createUser, signIn } from '../actions/auth-actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.createUser(data).then(
      (res) => {
        // console.log(data);
        this.props.signIn(data).then(res => browserHistory.push('/products'));
      },
      (err) => {
        this.props.dispatch(reset('SignUpFormForm'));
      }
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} autoComplete="">
        <div className="row padding-sm">
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <Field name="first_name" component={renderTextField} type="text" className="form-control" placeholder="First Name" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <Field name="last_name" component={renderTextField} type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Field name="email" component={renderTextField} type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <Field name="password" type="password" component={renderTextField} className="form-control" placeholder="Password" />
        </div>
        <div className="form-group">
          <button className="btn btn-theme-primary btn-lg full-width" type="submit" disabled={this.props.invalid}>Sign Up</button>
        </div>
      </form>

    );
  }
}

const validations = {
  required: {fields: ['email', 'password', 'first_name', 'last_name']},
  charCount: {fields: ['password'], min: 8 },
  email: {fields: ['email']}
};

SignUpForm = reduxForm({
  form: 'SignUpFormForm',
  validate: (values) => {return validate(values, validations)}
})(SignUpForm);

SignUpForm = connect(null, { createUser, signIn })(SignUpForm);

export default SignUpForm;
