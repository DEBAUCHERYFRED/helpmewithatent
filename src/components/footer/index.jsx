import React from "react";

export default function Footer() {
  const style = {
    marginRight: "1em",
    cursor: "pointer"
  };

  return (
    <footer className="py-5 bg-black">
      <div className="container text-center">
        <p className="m-0 text-center text-white small">
          Help Me With a Tent is a 501c3 non-profit organization.
        </p>
      </div>
    </footer>
  );
}
