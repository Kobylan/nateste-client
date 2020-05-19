import React, { Component } from "react";
import styled from "styled-components";

const Order = styled.div`
  background-color: lightgoldenrodyellow;
  height: 100%;
  display: block !important;
`;

export default class Orders extends Component {
  render() {
    return <Order className={this.props.pos}>Oresers</Order>;
  }
}
