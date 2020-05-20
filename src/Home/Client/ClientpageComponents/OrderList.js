import React, { Component } from "react";
import styled from "styled-components";

const OLiset = styled.div`
  background-color: Red;
`;

export default class OrderList extends Component {
  render() {
    return (
      <OLiset id="order-list" className={this.props.class}>
        OrderList
        <button onClick={(e) => this.props.action}> change</button>
      </OLiset>
    );
  }
}
