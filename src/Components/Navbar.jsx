import React, { useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

export default function Navbar() {
  const [Btn, setBtn] = useState(true);

  return (
    <Nav>
      <Logo>
        <img src="\images\Disney_Plus_logo.svg.png" alt="DISNEY" />
      </Logo>
      {Btn ? <SignBtn>Login </SignBtn> : <NavMenu />}
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: ; */
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

const SignBtn = styled.div`
  background-color: #279eff !important;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font: 12px;
  font-weight: 600;
  margin-left: 60px;
  transition: background-color 0.3s, transform 0.3s; /* Specify transition properties */
  &:hover {
    background-color: transparent !important;
    transform: scale(1.2); /* Scale the element on hover */
  }
`;
