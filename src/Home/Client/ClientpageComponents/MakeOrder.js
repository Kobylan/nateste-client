import React, { Component } from "react";

export default class MakeOrder extends Component {
  render() {
    return (
      <div id="make-order" className={this.props.class}>
        MakeOrder
        <button onClick={(e) => this.props.action()}> chsdaange</button>
      </div>
    );
  }
}
