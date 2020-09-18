import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        name: displayName,
        email: email,
        error: '',
      };
      return signedInUser;
    })
    .catch((err) => {
      return err.message;
    });
};

export const handleFacebookSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const signedInUser = {
        name: displayName,
        email: email,
      };
      return signedInUser;
    })
    .catch((error) => {
      return error.message;
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
      };
      return signedOutUser;
    });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
      };
      updateUserName(name);
      return signedInUser;
    })
    .catch((error) => {
      return error.message;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
      };
      return signedInUser;
    })
    .catch((error) => {
      return error.message;
    });
};
