import React from "react";
import styled from "styled-components";

const Detail = (props) => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="img"
        />
      </Background>
    </Container>
  );
};

const Container = styled.div`
  /* height: 100vh;
  width: 100vw;
  background: red; */
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  width: 100vw;
  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
export default Detail;
