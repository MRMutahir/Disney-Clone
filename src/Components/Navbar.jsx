import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../FireBase.js";
import { useNavigate } from "react-router-dom";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/User/UserSlice.js";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(history);
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // console.log(userPhoto,">>>>>>>>>>>>>>>>>>.userPhoto");

  const [Btn, setBtn] = useState(true);
  const googleHandel = async () => {
    // console.log("GoogleHandel");
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result.user);
      setUserData(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  const setUserData = (user) => {
    console.log(user, "result>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    user && setBtn(false);
    // console.log(user, ">>>>>>>>>>>>>>>user");
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const LogOut = () => {
    setBtn(true);
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserData(user);
        navigate("/home"); // Use the navigate function here
      }
    });
  }, [username]);

  return (
    <Nav>
      <Logo>
        <img src="\images\Disney_Plus_logo.svg.png" alt="DISNEY" />
      </Logo>
      {Btn ? (
        <SignBtn onClick={googleHandel}>Login </SignBtn>
      ) : (
        <NavMenu photo={userPhoto} LogOut={LogOut} />
      )}
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: ; */
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  padding: 0px 36px;
  letter-spacing: 13px;
  z-index: 3;
  height: 100px;
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
