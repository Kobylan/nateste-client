import React from "react";
import "./App.css";
import Header from "./Header/Header";
import styled from "styled-components";
import ClientPage from "./Home/Client/ClientPage";
import Ball from "./Ball/Ball";
export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  position = (e) => {
    let x = e.nativeEvent.clientX;
    let y = e.nativeEvent.clientY;
    this.setState({
      x: x,
      y: y,
    });
  };
  render() {
    return (
      <div
        onMouseMove={(e) => {
          this.position(e);
        }}
      >
        <Header />
        <ClientPage position={this.state} />
        <Ball position={this.state} />
      </div>
    );
  }
}
