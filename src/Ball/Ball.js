import React, { Component } from "react";
import styled from "styled-components";
const Circle = styled.div`
  width: 45px;
  height: 45px;
  background: none;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -22.5px 0 0 -22.5px;
  pointer-events: none;
  transition: color 0.5s;
  will-change: color, transform;
`;

export default class Ball extends Component {
  move = () => {
    let x = this.props.position.x;
    let y = this.props.position.y;
    const css =
      "transform: translate(" +
      x -
      window.innerWidth / 2 +
      "px" +
      ", " +
      y -
      window.innerHeight / 2 +
      "px)";
    console.log(css);
    return css;
  };

  render() {
    return <Circle style={this.move} />;
  }
}
