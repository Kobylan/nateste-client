import React, { Component } from "react";
import styled from "styled-components";

const Order = styled.div`
  background-color: lightgoldenrodyellow;
`;

export default class Orders extends Component {
  render() {
    return (
      <Order id="orders" className={this.props.class}>
        Oresers
        <button onClick={(e) => this.props.action()}> change</button>
      </Order>
    );
  }
}
