import React, { Component } from "react";
import TextArea from "./Order.Components/TextArea";
import styled from "styled-components";

const Form = styled.div`
  border: 1px solid #efbb35;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0px 4px 10px -8px black;
  border-radius: 3px;
`;

class Order extends Component {
  render() {
    return (
      <Form>
        <TextArea />
      </Form>
    );
  }
}

export default Order;
