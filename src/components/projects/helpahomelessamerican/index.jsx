import React from "react";

export default function HelpAHomelessAmerican() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img
              className="img-fluid rounded-circle"
              src="https://cl.ly/703bfadd162b/help.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Help a Homeless American</h2>
            <p>
              In this project I made a non-profit website to help homeless
              Americans get in touch with people around them that can provide
              them with food, work, or shelter. The technologies I used are
              React JS, Redux, JSX, ES6, JavaScript, HTML5, CSS3, Node JS,
              Express, npm, and Firebase. Check the website out by clicking{" "}
              <a
                href="https://helpahomelessamerican.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
