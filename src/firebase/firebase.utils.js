import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDN3LHA8grxAioWy-m86H3gLzVUsFudPlU",
  authDomain: "openshop-db.firebaseapp.com",
  databaseURL: "https://openshop-db.firebaseio.com",
  projectId: "openshop-db",
  storageBucket: "openshop-db.appspot.com",
  messagingSenderId: "1097912579620",
  appId: "1:1097912579620:web:c2d0eab30de7331bc14ab1",
  measurementId: "G-3FMR98M23V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creatinguser', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;