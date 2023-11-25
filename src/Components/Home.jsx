import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice.js";
import { selectUserName } from "../features/User/UserSlice.js";
import {db}  from "../FireBase.js"

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // let linkSnapshotListener;  // Declare 'linkSnapshotListener'
  // let isRenderingLinks = false;  // Declare 'isRenderingLinks'




   // useEffect(() => {
    // if (linkSnapshotListener) {
    //   linkSnapshotListener();
    // }
  
  //   let collectionName = `movie`;
  //   linkSnapshotListener = db.collection(`${collectionName}`)
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot(function (querySnapshot) {
  //       const movies = [];
  //       querySnapshot.forEach(function (doc) {
  //         var data = doc.data();
  //         console.log(data);
  //         // movies.push({ id: doc.id, ...data });
  //       });
  
  //       // Dispatch an action or update local state with the movies array
  //       dispatch(setMovies(movies));
  
  //       isRenderingLinks = false;
  //     }, function (error) {
  //       console.log("Error getting documents: ", error);
  //       isRenderingLinks = false;
  //     });
  // }, [dispatch]);




// const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
//   const recommends = [];
//   const newDisneys = [];
//   const originals = [];
//   const trending = [];

//   snapshot.docs.forEach((doc) => {
//     switch (doc.data().type) {
//       case "recommend":
//         recommends.push({ id: doc.id, ...doc.data() });
//         break;

//       case "new":
//         newDisneys.push({ id: doc.id, ...doc.data() });
//         break;

//       case "original":
//         originals.push({ id: doc.id, ...doc.data() });
//         break;

//       case "trending":
//         trending.push({ id: doc.id, ...doc.data() });
//         break;
//     }
//   });

//   dispatch(
//     setMovies({
//       recommend: recommends,
//       newDisney: newDisneys,
//       original: originals,
//       trending: trending,
//     })
//   );
// });

// // Cleanup subscription on unmount
// return () => unsubscribe();


// console.log(db._databaseId.projectId, ">>>>>>>>collectiondb");
// let id = db._databaseId.projectId;
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
