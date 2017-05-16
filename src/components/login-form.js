import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import { renderTextField } from '../util/form-fields';
import { signIn } from '../actions/auth-actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.signIn(data).then(
      (res) => {
        browserHistory.push("/products");
      }
    )
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="full-page-form">
        <form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <div className="form-group">
            <Field name="email" component="input" type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <Field name="password" type="password" component="input" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-primary btn-lg" type="submit">Sign In</button>
        </form>
        <div className="text-center margin-top-lg">
          <span className="large text-secondary">Don't have an account?&nbsp;&nbsp;&nbsp;</span><br className="visible-xs"/>
          <Link to="/sign-up" className="large">Sign Up</Link>
        </div>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'LoginFormForm' // a unique name for this form
})(LoginForm);

LoginForm = connect(null, { signIn })(LoginForm);

export default LoginForm;
