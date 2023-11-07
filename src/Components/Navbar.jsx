import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <h1>Navbar</h1>
      <h1>Navbar</h1>
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
`;
