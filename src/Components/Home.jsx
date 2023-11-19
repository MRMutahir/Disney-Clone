// import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "../Components/Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice.js";
import { db } from "../FireBase.js";
import { collection, getDocs } from "firebase/firestore";
import { selectUserName } from "../features/User/UserSlice.js";
// import  HomeBgImage  from "../../public/images/Disney_Plus_logo.svg.png"

function Home() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  useEffect(() => {
    async function faq() {
      const querySnapshot = await getDocs(collection(db, "movie"));

      const recommends = [];
      const newDisney = [];
      const originals = [];
      const trending = [];

      querySnapshot.docs.map(async (doc) => {
        const firebaseData = doc.data();

        switch (firebaseData.type) {
          case "recommend":
            recommends.push({ id: doc.id, ...firebaseData });
            break;
          case "newDisney":
            newDisney.push({ id: doc.id, ...firebaseData });
            break;
          case "original":
            originals.push({ id: doc.id, ...firebaseData });
            break;
          case "trending":
            trending.push({ id: doc.id, ...firebaseData });
            break;
        }
      });
      // let a  =  recommends.filter((ele) => ele.type === "recomend")
      // console.log(a,">>>>a");

      dispatch(
        setMovies({
          recommend: recommends.filter((ele) => ele.type === "recommend"),
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    }

    faq();
  }, [username]);

  // console.log(db._databaseId.projectId, ">>>>>>>>collectiondb");
  let id = db._databaseId.projectId;
  // console.log(id);
  // const dispatch = useDispatch();
  // const username = useSelector(selectUserName);
  // let recommends = [];
  // let newDisney = [];
  // let originals = [];
  // let trending = [];

  // useEffect(() => {
  //   async function faq() {
  //     const querySnapshot = await getDocs(collection(db, "movie"));
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, "=> ", doc.data().type);
  //       let firebaseData = doc.data();
  //       // console.log(firebaseData.type);
  //       switch (firebaseData.type) {
  //         case "recommend":
  //           recommends = [...recommends, { id: doc.id, ...firebaseData }];
  //           // console.log(recommends);

  //           break;
  //         case "newDisney":
  //           newDisney = [...newDisney, { id: doc.id, ...firebaseData }];
  //           // console.log(newDisney);

  //           break;
  //         case "original":
  //           originals = [...originals, { id: doc.id, ...firebaseData }];
  //           // console.log(originals);

  //           break;
  //         case "trending":
  //           trending = [...trending, { id: doc.id, ...firebaseData }];
  //           // console.log(trending);

  //           break;
  //       }
  //     });
  //   }
  //   faq();
  //   dispatch(
  //     setMovies({
  //       recommend: recommends,
  //       newDisney: newDisney,
  //       original: originals,
  //       trending: trending,
  //     })
  //   );
  // }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 100px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
