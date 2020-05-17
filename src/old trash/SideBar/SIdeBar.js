import React, { Component } from "react";
import SideBarConfig from "../../config/SideBar.config";
import styled from "styled-components";

const Nav = styled.nav`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
`;
const Link = styled.div`
  cursor: pointer;
`;
const Item = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  display: flex;
`;
const Icon = styled.div`
  cursor: pointer;
`;
const Title = styled.div`
  margin-right: 15px;
  margin-left: 20px;
  font-size: 19px;
  font-weight: 600;
  padding-bottom: 8px;
`;
export default class SIdeBar extends Component {
  render() {
    return (
      <React.Fragment>
        {SideBarConfig.map((item) => (
          <Nav>
            <Link key={item.id}>
              <Item>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
              </Item>
            </Link>
          </Nav>
        ))}
      </React.Fragment>
    );
  }
}
