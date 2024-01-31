import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtLbeKwYUxOJ0BD4lvmUz2c95EKP_hsw0",
  authDomain: "capstone-7c5fc.firebaseapp.com",
  projectId: "capstone-7c5fc",
  storageBucket: "capstone-7c5fc.appspot.com",
  messagingSenderId: "429353850202",
  appId: "1:429353850202:web:fdb4d10593b3bcba388f63",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getCategoriesAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categories = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categories;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const createUserWithEmailAndPasswordFirebase = async (
  email,
  password
) => {
  if (!email || !password) return;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInWithEmailAndPasswordFirebase = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutFirebase = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListner = (callback) => {
  return onAuthStateChanged(auth, callback);
};
