import React, { Component } from "react";
import styled from "styled-components";

const OLiset = styled.div`
  background-color: Red;
  height: 100%;
  display: block !important;
`;

export default class OrderList extends Component {
  render() {
    return <OLiset>OrderList</OLiset>;
  }
}
