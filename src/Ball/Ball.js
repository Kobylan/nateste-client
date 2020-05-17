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

let x = 0;
let y = 0;
export default class Ball extends Component {
  render() {
    let xmouse = this.props.position.x;
    let ymouse = this.props.position.y;

    if (!x || !y) {
      x = xmouse;
      y = ymouse;
    } else {
      x += (xmouse - x) * 0.25;
      y += (ymouse - y) * 0.25;
    }
    let speed = Math.min(Math.abs(x - xmouse), 100) / 100;
    let css = `translate(${x - window.innerWidth / 2}px, ${
      y - window.innerHeight / 2
    }px) scale(${0.5 + 0.5 * (1 - speed)})`;

    return (
      <Circle
        style={{
          transform: css,
        }}
      />
    );
  }
}
