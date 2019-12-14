import React from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";

export class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  relocate = () => {
    window.location.href = "/";
  };

  componentDidMount() {
    setTimeout(() => {
      this.relocate();
    }, 20000);
  }

  componentWillUnmount() {
    clearTimeout(this.relocate);
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./checked-done.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <h2 className="display-4 alignMessage">
          Your donation was successfully processed!{" "}
        </h2>
        <p className="alignMessage">
          Thank you today you saved someones life! Your receipt for tax
          deduction purposes should be sent to you in a couple of minutes via
          email, you will be redirected to the main site in a few seconds. You
          will receive the receipt from Walmart and the personal message from
          the person you helped in your email after the tent and sleeping has
          been purchased and given to someone!
        </p>
      </div>
    );
  }
}

export default withRouter(Success);
