import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src="\images\Disney_Plus_logo.svg.png" alt="DISNEY" />
      </Logo>
      <NavMenu>NavMenu</NavMenu>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  padding: 0px 36px;
  letter-spacing: 13px;
  z-index: 3;
  height: 70px;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 30px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  flex-flow: row nowrap;
`;
