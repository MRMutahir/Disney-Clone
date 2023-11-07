import React from "react";
import styled from "styled-components";
// import Navbar from "./Navbar";
// import bg from ""
function Login() {
  return (
    <Container>
      <Content>
        <BGImage />
        {/* <Navbar /> */}
        <CTA>
          <CtaLogoOne src="\images\download-removebg-preview.png" alt="" />
          <GetAllThere>GET ALL THERE</GetAllThere>
          <Para>
            The Walt Disney Company, commonly known as Disney, is an American
            multinational mass media and entertainment conglomerate that is
            headquartered at the Walt Disney Studios complex in Burbank,
          </Para>
          <CtaLogoTwo src="\images\cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: "hidden";
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: "10vw";
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: "80px 40px";
  height: 100%;
`;
const BGImage = styled.div`
  height: 100%;
  background-repeat: "no-repeat";
  background-size: cover;
  position: absolute;
  background-image: url("/images/login-background.jpg");
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  object-fit: cover;
`;

const CtaLogoOne = styled.img`
  /* margin-bottom: 12px; */
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const GetAllThere = styled.button`
  padding: 20px;
  width: 50%;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  letter-spacing: 5px;
  font-size: 18px;
  background-color: #279eff !important;
  border: none;
  transition: background-color 0.3s, transform 0.3s; /* Specify transition properties */
  cursor: pointer;
  &:hover {
    background-color: transparent !important;
    transform: scale(1.2); /* Scale the element on hover */
  }
`;
const Para = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
  text-align: center;
  color: hsla(0, 0%, 95.3%, 1);
`;

const CtaLogoTwo = styled.img`
  /* margin-bottom: 12px; */
  max-width: 600px;
  min-height: 1px;
  display: block;
`;
export default Login;
