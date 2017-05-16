import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import { renderTextField, validate } from '../util/form-fields';
import { createUser, signIn } from '../actions/auth-actions';
import SignUpForm from '../components/sign-up-form';

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.createUser(data).then(
      (res) => {
        this.props.signIn(data).then(res => browserHistory.push('/'));
      },
      (err) => {
        this.props.dispatch(reset('UserNewForm'));
      }
    );
  }

  componentWillMount() {
    if(this.props.isAuthenticated){
        browserHistory.push('/products');
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-1 col-md-offset-3">
            <h3 className="text-center margin-bottom-md margin-top-md">
              <b>Look! <span className="text-primary">Things to BUY!</span> Give us... <span className="text-secondary">YOUR MONEY!</span> And we shall all WIN!</b>
            </h3>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <h3 className="margin-bottom-md">
                  To help consumers, we let you buy things with your OWN money! JUST LIKE AMAZON!
                </h3>
                <p>insert text here</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(LandingPage);
