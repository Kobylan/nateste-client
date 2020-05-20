import React, { Component } from "react";
import styled from "styled-components";
import nateste from "../Images/nateste.svg";

const H = styled.header`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
`;
const Logo = styled.img`
  width: 120px;
  padding: 10px;
`;

export default class Header extends Component {
  render() {
    return (
      <H>
        <Logo src={nateste} />
      </H>
    );
  }
}
