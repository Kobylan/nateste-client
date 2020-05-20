import React, { Component } from "react";

export default class OrderList extends Component {
  render() {
    return (
      <div id="order-list" className={this.props.class}>
        OrderList
        <button onClick={(e) => this.props.action()}> change</button>
      </div>
    );
  }
}
