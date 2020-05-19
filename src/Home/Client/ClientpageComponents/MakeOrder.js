import React, { Component } from "react";
import styled from "styled-components";

const Make = styled.div`
  background-color: lightblue;
  height: 100%;
  display: block !important;
`;

export default class MakeOrder extends Component {
  render() {
    return <Make className={this.props.pos}>MakeOrder</Make>;
  }
}
