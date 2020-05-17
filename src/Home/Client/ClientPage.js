import React, { Component } from "react";
import styled from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import NewOrder from "./ClientpageComponents/NewOrder";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
  display: grid;
`;

export default class ClientPage extends Component {
  _width = (e) => {
    let x = e.x;
    return 54 - x / ((window.innerWidth / 2) * 0.25) + "%" + " auto";
  };
  render() {
    return (
      <React.Fragment>
        <Wrapper
          style={{ gridTemplateColumns: this._width(this.props.position) }}
        >
          <Orders className="left" />
          <NewOrder className="right" />
        </Wrapper>
      </React.Fragment>
    );
  }
}
