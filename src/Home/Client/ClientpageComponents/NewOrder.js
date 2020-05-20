import React, { Component } from "react";
import styled from "styled-components";

export default class NewOrder extends Component {
  render() {
    return (
      <div id="new-order" className={this.props.class}>
        NewOrder
        <button onClick={(e) => this.props.action}> change</button>
      </div>
    );
  }
}
