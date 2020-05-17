import React from "react";
import "./App.css";
import Header from "./Header/Header";
import styled from "styled-components";
import ClientPage from "./Home/Client/ClientPage";
function App() {
  return (
    <React.Fragment>
      <Header />
      <ClientPage />
    </React.Fragment>
  );
}

export default App;
