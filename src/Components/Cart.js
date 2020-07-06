import React, { Component } from "react";
import Title from "./Title";

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Your Cart is" title="Currently Empty" />
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
