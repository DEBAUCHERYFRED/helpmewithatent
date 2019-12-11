import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Who are we?</h2>
            <p>
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
            <h2 className="display-4">How does your contribution help?</h2>
            <p>
              Your contribution will directly go to buying a $25(tax not
              included) tent and $15(tax not included) sleeping bag sold at any
              local Walmart.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">What will you get in return?</h2>
            <p>
              Besides helping a child, woman, or man that is living in the
              pavement get temporary shelter and a warm place to sleep, you will
              also receive via email a receipt for tax deduction purposes and an
              envelope with a personal message from the person you helped.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 order-lg-1" style={{ marginBottom: "3rem" }}>
          <div className="p-5">
            <h2 className="display-4" style={{ textAlign: "center" }}>
              Help someone today!
            </h2>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                position: "absolute",
                left: "45%",
                borderRadius: "42px",
                width: "10rem",
                height: "4rem",
                fontSize: "27px"
              }}
            >
              Help Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}