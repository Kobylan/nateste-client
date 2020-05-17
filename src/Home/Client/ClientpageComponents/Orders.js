import React, { Component } from "react";
import styled from "styled-components";

const Order = styled.div`
  transition: width 2s;
`;

export default class Orders extends Component {
  render() {
    return <Order className={this.props.className}>order</Order>;
  }
}
