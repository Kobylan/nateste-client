import React, { Component } from "react";

export default class MakeOrder extends Component {
  render() {
    return (
      <div
        id="make-order"
        onClick={(e) => this.props.action()}
        className={this.props.class}
      >
        {this.props.newOrder ? "Back" : "MakeOrder"}
      </div>
    );
  }
}
