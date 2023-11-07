import React from "react";
import styled from "styled-components";

function NavMenu() {
  return (
    <NavMenuItem>
      <List>
        <li>HOME</li>
        <li>SEARCH</li>
        <li>WATCHLIST</li>
        <li>ORIGINALS</li>
        <li>MOVIES</li>
        <li>SERIES</li>
      </List>
    </NavMenuItem>
  );
}

export default NavMenu;

const NavMenuItem = styled.div``;
const List = styled.ul`
  display: flex;
  list-style: none;
  letter-spacing: 0px;
  gap: 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
  color: rgb(249, 249, 249);
  transition: background-color 0.3s, transform 0.3s; /* Specify transition properties */
  cursor: pointer;
  li {
    &:hover {
      text-decoration: underline;
      letter-spacing: 2px;
    }
  }
`;
