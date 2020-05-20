import React, { Component } from "react";
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
  render() {
    return (
      <React.Fragment>
        <main>
          <NewOrder class={this.state.newOrder ? "curr" : "inv"} />
          <MakeOrder
            newOrder={this.state.newOrder}
            action={() => {
              this.state.newOrder
                ? this.setState({
                    newOrder: false,
                    orders: true,
                  })
                : this.setState({
                    newOrder: true,
                    orders: false,
                  });
            }}
            class={this.state.makeOrder ? "curr" : "inv"}
          />
          <Orders
            orderList={this.state.orderList}
            action={() => {
              this.state.orderList
                ? this.setState({
                    orderList: false,
                    makeOrder: true,
                  })
                : this.setState({
                    orderList: true,
                    makeOrder: false,
                  });
            }}
            class={this.state.orders ? "curr" : "inv"}
          />
          <OrderList class={this.state.orderList ? "curr" : "inv"} />
        </main>
      </React.Fragment>
    );
  }
}
