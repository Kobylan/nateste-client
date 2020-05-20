import React, { Component } from "react";

export default class Orders extends Component {
  render() {
    return (
      <div
        id="orders"
        onClick={(e) => this.props.action()}
        className={this.props.class}
      >
        {this.props.orderList ? "Back" : "Orders"}
      </div>
    );
  }
}
