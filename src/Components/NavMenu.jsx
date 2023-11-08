import React from "react";
import styled from "styled-components";

function NavMenu({ photo }) {
  // console.log(photo);
  return (
    <NavMenuItem>
      <List>
        <li>HOME</li>
        <li>SEARCH</li>
        <li>WATCHLIST</li>
        <li>ORIGINALS</li>
        <li>MOVIES</li>
        <li>SERIES</li>
        <li>SERIES</li>
      </List>
      <Img src={photo} />
    </NavMenuItem>
  );
}

export default NavMenu;

const NavMenuItem = styled.div`
  display: flex;
  gap: 20px;
`;
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

const Img = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
  height: 50px;
  width: 50px;
`;
