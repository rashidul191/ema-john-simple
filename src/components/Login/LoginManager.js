import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFramework = ()=>{
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
     return firebase.auth().signInWithPopup(googleProvider)
    .then( res=>{
      const {displayName, photoURL, email}= res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      }
      return signedInUser;
     
    })
    .catch(err =>{
      
    })
  }

  export const handleFbLogIn =()=>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      return user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
     console.log(errorCode, errorMessage);
    });
  }

  export const handleSignOut = ()=>{
    return firebase.auth().signOut()
    .then(res => {
      const sineOutUser = {
        isSignedIn: false,
        name: '',
        email:'',
        photo:'',
        error:'',
        success: false,
      }
      return sineOutUser;
    })
    .catch(err => {
      
    });
}

// export const createUserWithEmailAndPassword = ()=> {
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//     })
//     .catch(error=> {
//       const newUserInfo = {...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//       updateUserName(user.name);
      
//     });
// }

// export const signInWithEmailAndPassword = ()=> {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res =>{
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sign in user inof', res.user);
//     })
//     .catch(function(error) {
//       const newUserInfo = {...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
// }

// const updateUserName = name =>{
//     const user = firebase.auth().currentUser;
//     user.updateProfile({
//       displayName: name
//     }).then(function() {
//       // Update successful.
//       console.log('user name updated successfully');
//     }).catch(function(error) {
//       // An error happened.
//       console.log(error);
//     });
//   }