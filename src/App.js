import React from "react";
import "./App.css";
import Header from "./Header/Header";
import ClientPage from "./Home/Client/ClientPage";

export default class App extends React.Component {
  state = {
    x: 0,
  };
  render() {
    return (
      <div onMouseMove={(e) => this.setState({ x: e.nativeEvent.clientX })}>
        <Header />
        <ClientPage position={this.state} />
      </div>
    );
  }
}
