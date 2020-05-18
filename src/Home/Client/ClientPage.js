import React, { Component } from "react";
import styled from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import MakeOrder from "./ClientpageComponents/MakeOrder";
import NewOrder from "./ClientpageComponents/NewOrder";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
  display: grid;
`;
const Mainwrapper = styled.div`
  display: none;
`;

export default class ClientPage extends Component {
  _width = (e) => {
    let x = e.x;
    return 54 - x / ((window.innerWidth / 2) * 0.25) + "% auto";
  };
  render() {
    return (
      <React.Fragment>
        <Wrapper
          style={{ gridTemplateColumns: this._width(this.props.position) }}
        ></Wrapper>
      </React.Fragment>
    );
  }
}
