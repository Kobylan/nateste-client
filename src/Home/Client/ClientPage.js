import React, { Component } from "react";
import styled from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import NewOrder from "./ClientpageComponents/NewOrder";
import "../../App.css";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
  display: grid;
`;

export default class ClientPage extends Component {
  state = {
    widht: "50% auto",
  };
  _width = (e) => {
    let x = e.nativeEvent.clientX;
    this.setState({
      widht: 54 - x / ((window.innerWidth / 2) * 0.25) + "%" + " auto",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper
          onMouseMove={(e) => {
            this._width(e);
          }}
          style={{ gridTemplateColumns: this.state.widht }}
        >
          <Orders className="left" />
          <NewOrder className="right" />
        </Wrapper>
      </React.Fragment>
    );
  }
}
