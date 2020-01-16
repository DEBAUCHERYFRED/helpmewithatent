import React from "react";

export default function Header() {
  return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">
            Help a homeless child, woman, or man with a meal.
          </h1>
          <h2 className="masthead-subheading mb-0">
            We are a 501c3 non-profit organization. Scroll down to learn how you
            can help someone in need!
          </h2>
          {/* <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> */}
        </div>
      </div>
      <div className="bg-circle-1 bg-circle"></div>
      <div className="bg-circle-2 bg-circle"></div>
      <div className="bg-circle-3 bg-circle"></div>
      <div className="bg-circle-4 bg-circle"></div>
    </header>
  );
}
