import React, { Component } from "react";
import styled from "styled-components";

export default class MakeOrder extends Component {
  render() {
    const style = this.props.class + " make";
    return (
      <div id="make-order" className={this.props.class}>
        MakeOrder
        <button onClick={(e) => this.props.action()}> chsdaange</button>
      </div>
    );
  }
}
