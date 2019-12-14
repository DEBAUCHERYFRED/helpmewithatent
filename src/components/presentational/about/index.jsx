/* eslint-disable no-undef */
import React from "react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.donateNow = this.donateNow.bind(this);
  }
  donateNow() {
    var stripe = new Stripe("pk_test_flbV1w4TMRdRrtOLBWpupuvL00JFppLkqm");
    stripe
      .redirectToCheckout({
        items: [
          // Replace with the ID of your SKU
          { sku: "sku_GLeA936Ox5q94P", quantity: 1 }
        ],
        successUrl: "https://relaxed-almeida-11f9e6.netlify.com/#/success",
        cancelUrl: "https://relaxed-almeida-11f9e6.netlify.com/#/error"
      })
      .then(function(result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">Who are we?</h2>
              <p className="alignMessage">
                We are a non-profit charity organization that helps people who
                can't access shelter living in the streets with a tent and
                sleeping bag.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">
                How does your contribution help?
              </h2>
              <p className="alignMessage">
                Your contribution will directly go to buying a $25(tax not
                included) tent and $15(tax not included) sleeping bag sold at
                any local Walmart.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 order-lg-1">
            <div className="p-5">
              <h2 className="display-4 alignMessage">
                What will you get in return?
              </h2>
              <p className="alignMessage">
                Besides helping a child, woman, or man that is living on the
                pavement get temporary shelter and a warm place to sleep, you
                will also receive via email a receipt for tax deduction
                purposes, a receipt of the purchased items, and an envelope with
                a personal message from the individual you helped.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div
            className="col-lg-12 order-lg-1"
            style={{ marginBottom: "3rem" }}
          >
            <div className="p-5">
              <h2 className="display-4" style={{ textAlign: "center" }}>
                Help someone today!
              </h2>
              <button
                type="button"
                className="btn btn-primary help-button"
                onClick={this.donateNow}
              >
                Help Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
