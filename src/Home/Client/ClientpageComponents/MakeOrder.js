import React, { Component } from "react";

export default class MakeOrder extends Component {
  render() {
    return (
      <div id="make-order" className={this.props.class}>
        {this.props.newOrder ? (
          <button onClick={(e) => this.props.action()}> Back </button>
        ) : (
          <button onClick={(e) => this.props.action()}> MakeOrder </button>
        )}
      </div>
    );
  }
}
