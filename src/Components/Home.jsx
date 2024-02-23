import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice.js";
import { db } from "../FireBase";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getdata() {
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];

      const querySnapshot = await getDocs(collection(db, "movie"));
      querySnapshot.forEach((doc) => {
        let firebaseData = doc.data();
        switch (firebaseData.type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...firebaseData }];
            break;
          case "newDisney":
            newDisney = [...newDisney, { id: doc.id, ...firebaseData }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...firebaseData }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...firebaseData }];
            break;
          default:
            console.error("Unhandled type:", firebaseData.type);
            break;
        }
      });

      dispatch(
        setMovies({
          recommends: recommends,
          newDisney: newDisney,
          originals: originals,
          trending: trending,
        })
      );
    }
    getdata();
  }, [dispatch]);

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
