import React, { Component } from "react";

export default class Orders extends Component {
  render() {
    return (
      <div id="orders" className={this.props.class}>
        Oresers
        <button onClick={(e) => this.props.action()}> change</button>
      </div>
    );
  }
}
