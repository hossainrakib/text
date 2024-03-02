// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRONG_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSESING_SENTING_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// // initalize service

// const db = getFirestore();

// const colRef = collection(db, "cars");
// //function to add a car document to firestore

// const addDealer = async (dealer) => {
//   try {
//     const decRef = await addDoc(collection(db, "dealers"), dealer);
//     console.log("document written eith in", decRef.id);
//   } catch (error) {
//     console.error("errror adding document:", error);
//   }
// };

// //fatch the fson file

// fetch("http://localhost:3002/database")
//   .then((response) => response.json())
//   .then((dealerData) => {
//     dealerData.forEach((dealer) => {
//       addDealer(dealer);
//     });
//   })
//   .catch((error) => {
//     console.error("error ferching dealer data", error);
//   });

// export default app;
