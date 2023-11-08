import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignOutState } from "../features/User/UserSlice";

function NavMenu({ photo, LogOut }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // console.log(signOut, ">>>>>>>>>>>>>>>>>signOut");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  const setUserLogOut = () => {
    dispatch(setSignOutState());
    LogOut();
  };
  const ButtonLogOutHandel = () => {
    signOut(auth) // Assuming 'auth' is the Firebase authentication object
      .then(() => {
        // Successful sign-out
        setUserLogOut();
        navigate("/");
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // Handle the sign-out error
        console.log("Sign-out error:", error);
      });
  };

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
      <DropDown onClick={() => setDropdownOpen(!isDropdownOpen)}>
        <Img src={photo} />
        {isDropdownOpen && (
          <ButtonLogOut onClick={ButtonLogOutHandel}>LOGOUT</ButtonLogOut>
        )}
      </DropDown>
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
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
  li {
    &:hover {
      text-decoration: underline;
      letter-spacing: 2px;
      transition-duration: 500ms;

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

const DropDown = styled.div`
  position: relative;
`;

const ButtonLogOut = styled.button`
  position: absolute;
  bottom: -50px;
  left: -10px;
  cursor: pointer;
  font: 12px;
  font-weight: 600;
  padding: 10px;
  transition: background-color 0.3s, transform 0.3s; /* Specify transition properties */
  &:hover {
    background-color: white !important;
    transform: scale(1.2); /* Scale the element on hover */
    color: #279eff;
  }
  background-color: #279eff !important;
  color: white;
  border-radius: 10px;
`;
