import React from "react";

export default function TechStack() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img
              className="img-fluid rounded-circle"
              src="https://cl.ly/f35852d55c04/all-logos.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Tech Stack</h2>
            <p>
              The technologies I specialized on are React JS, Redux, JavaScript,
              ES6, ES7, TypeScript, HTML5, CSS3, Webpack, npm, Jest, Enzyme, and
              Gulp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
