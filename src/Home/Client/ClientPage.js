import React, { Component } from "react";
import styled from "styled-components";
import Orders from "./ClientpageComponents/Orders";
import MakeOrder from "./ClientpageComponents/MakeOrder";
import NewOrder from "./ClientpageComponents/NewOrder";
import OrderList from "./ClientpageComponents/OrderList";

export default class ClientPage extends Component {
  state = {
    newOrder: false,
    makeOrder: true,
    orders: true,
    orderList: false,
  };
  _width = (e) => {
    let x = e.x;
    return 54 - x / ((window.innerWidth / 2) * 0.25) + "% auto";
  };

  hui() {
    this.setState({
      newOrder: false,
      orders: true,
    });
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <NewOrder
            action={() =>
              this.setState({
                newOrder: false,
                orders: true,
              })
            }
            class={this.state.newOrder ? "curr" : "inv"}
          />
          <MakeOrder
            action={(e) => this.hui}
            class={this.state.makeOrder ? "curr" : "inv"}
          />
          <Orders
            action={(e) => {
              this.setState({
                makeOrder: true,
                orderList: false,
              });
            }}
            class={this.state.orders ? "curr" : "inv"}
          />
          <OrderList
            action={this.ToLeft}
            class={this.state.orderList ? "curr" : "inv"}
          />
        </main>
      </React.Fragment>
    );
  }
}
