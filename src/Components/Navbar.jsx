import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../FireBase.js";
import { useNavigate, useLocation } from "react-router-dom";

import {
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/User/UserSlice.js";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Access current location using useLocation hook
  const currentUrl = location.pathname; // Get the pathname from the location object
  // console.log(currentUrl, ">>>>>>>>>>>>>currentUrl"); // Log the current URL

  const userPhoto = useSelector(selectUserPhoto);

  const [Btn, setBtn] = useState(true);

  const setUserData = useCallback(
    (user) => {
      user && setBtn(false);
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    },
    [dispatch]
  );

  const googleHandel = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      if (result) {
        localStorage.setItem("accessToken", result.user.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LogOut = () => {
    setBtn(true);
  };

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (token) {
        setUserData(user);
        navigate("/home");
      } else if (user) {
        // navigate("/detail/:id/");
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [setUserData, navigate]);

  return (
    <Nav>
      <Logo>
        <img src="\images\Disney_Plus_logo.svg.png" alt="DISNEY" />
      </Logo>
      {Btn ? (
        <SignBtn onClick={googleHandel}>Login</SignBtn>
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
  transition: background-color 0.3s, transform 0.3s;
  Specify transition properties &:hover {
    background-color: transparent !important;
    transform: scale(1.2); /* Scale the element on hover */
  }
`;
