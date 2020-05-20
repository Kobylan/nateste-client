render() {
    return (
      <main>
        <div id="new-order" className={this.state.newOrder ? "curr" : "inv"}>
          New order
        </div>
        <div id="make-order" className={this.state.makeOrder ? "curr" : "inv"}>
          {this.state.newOrder ? (
            <button
              onClick={() =>
                this.setState({
                  newOrder: false,
                  orders: true,
                })
              }
            >
              back
            </button>
          ) : (
            <button
              onClick={() =>
                this.setState({
                  newOrder: true,
                  orders: false,
                })
              }
            >
              Make order
            </button>
          )}
        </div>
        <div id="orders" className={this.state.orders ? "curr" : "inv"}>
          {this.state.orderList ? (
            <button
              onClick={() =>
                this.setState({
                  makeOrder: true,
                  orderList: false,
                })
              }
            >
              back
            </button>
          ) : (
            <button
              onClick={() =>
                this.setState({
                  orderList: true,
                  makeOrder: false,
                })
              }
            >
              Orders
            </button>
          )}
        </div>
        <div id="order-list" className={this.state.orderList ? "curr" : "inv"}>
          Order list
        </div>
      </main>
    );
  }
}