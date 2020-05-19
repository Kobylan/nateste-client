import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import MakeOrder from "./ClientpageComponents/MakeOrder";
import NewOrder from "./ClientpageComponents/NewOrder";
import OrderList from "./ClientpageComponents/OrderList";
import { bounce } from "react-animations";
import slideInLeft from "react-animations/lib/slide-in-left";
import slideInRight from "react-animations/lib/slide-in-right";

const SlideInLeft = styled.div`
  animation: 2s ${keyframes`${slideInLeft}`};
`;
const SlideInRight = styled.div`
  animation: 2s ${keyframes`${slideInRight}`};
`;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 100%;
  display: grid;
`;

export default class ClientPage extends Component {
  state = {
    LeftSideHandler: "MakeOrder",
    RightSideHandler: "Orders",
    UnderLeftSide: "MakeOrder",
  };

  underLeftSide() {
    switch (this.state.UnderLeftSide) {
      case "MakeOrder":
        return <MakeOrder styled={"z-index: -1"} />;

      default:
        break;
    }
  }

  getLeftSideComp() {
    switch (this.state.LeftSideHandler) {
      case "MakeOrder":
        return <MakeOrder />;
      case "NewOrder":
        return <NewOrder />;
      case "Orders":
        return (
          <SlideInRight>
            {" "}
            <Orders />
          </SlideInRight>
        );
      case "OrderList":
        return <OrderList />;
      default:
        break;
    }
  }
  getRightSideComp() {
    switch (this.state.RightSideHandler) {
      case "Orders":
        return (
          <div
            onClick={(e) => {
              this.ChangeRightSIde();
            }}
          >
            <Orders />
          </div>
        );
      case "OrderList":
        return <OrderList />;
      default:
        break;
    }
  }

  ChangeRightSIde() {
    switch (this.state.RightSideHandler) {
      case "Orders":
        this.setState({
          LeftSideHandler: "Orders",
          RightSideHandler: "OrderList",
        });
        break;
      case "OrderList":
        break;
      default:
        break;
    }
  }

  _width = (e) => {
    let x = e.x;
    return 54 - x / ((window.innerWidth / 2) * 0.25) + "% auto";
  };
  render() {
    return (
      <React.Fragment>
        <Wrapper
          style={{ gridTemplateColumns: this._width(this.props.position) }}
        >
          {this.getLeftSideComp()}
          {this.getRightSideComp()}
        </Wrapper>
      </React.Fragment>
    );
  }
}
