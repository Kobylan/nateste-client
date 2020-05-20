import React, { Component } from "react";

export default class Orders extends Component {
  render() {
    return (
      <div id="orders" className={this.props.class}>
        {this.props.orderList ? (
          <button onClick={(e) => this.props.action()}> Back </button>
        ) : (
          <button onClick={(e) => this.props.action()}> Orders </button>
        )}
      </div>
    );
  }
}
