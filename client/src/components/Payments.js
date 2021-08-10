import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CENTS_PER_DOLLAR  = 100;
const DOLLARS_TO_CHARGE = 5;


class Payments extends Component {
    render () {
        return (
            <StripeCheckout 
                name="Emaily"
                description="$5 for 5 email credits."
                amount={DOLLARS_TO_CHARGE * CENTS_PER_DOLLAR}
                token={token => this.props.handleToken(token)} // token received from stripe
                stripeKey={process.env.REACT_APP_STRIPE_KEY} // public stripe key
            >
                <button className="btn"> {/* Material-UI button */}
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
};

export default connect(null, actions)(Payments);
