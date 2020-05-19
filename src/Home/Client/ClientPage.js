import React, { Component } from "react";
import styled from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import MakeOrder from "./ClientpageComponents/MakeOrder";
import NewOrder from "./ClientpageComponents/NewOrder";
import ReactTransition from "react-transition-group";
import OrderList from "./ClientpageComponents/OrderList";

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
  };

  getLeftSideComp() {
    switch (this.state.LeftSideHandler) {
      case "MakeOrder":
        return <MakeOrder />;
      case "NewOrder":
        return <NewOrder />;
      case "Orders":
        return <Orders />;
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
