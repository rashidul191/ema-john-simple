import React, { useContext, useState } from 'react';

import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleFbLogIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';



function Login() {
  const [newUser, setNewUser] = useState(false);
 const [user, setUser] = useState({
   isSignedIn: false,
   newUser: false,
   name: '',
   email:'',
   password:'',
   photo:'',
 });

 initializeLoginFramework();
 const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
 const history = useHistory();
 const location = useLocation();

 let { from } = location.state || { from: { pathname: "/" } };

const googleSignIn = ()=>{
  handleGoogleSignIn()
  .then(res =>{
    setUser(res);
    setLoggedInUser(res);
  })
}

const fbSignIn = ()=>{
  handleFbLogIn ()
  .then(res =>{
    setUser(res);
    setLoggedInUser(res);
  })
}

const signOut = ()=>{
  handleSignOut ()
  .then (res =>{
    setUser (res);
    setLoggedInUser(res);
  })
}

  const handleBlur = (event)=>{
    let isFieldValid = true ;
    if(event.target.name === 'email'){
       isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && isPasswordHasNumber;
    }
    if(isFieldValid){
      
      const newUserInfo = {...user};
      newUserInfo[event.target.name]= event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (event)=>{
      if(newUser && user.email  && user.password){
       
      }
  
      if(!newUser && user.email && user.password){
       
      }
      event.preventDefault(1);
  }

  return (
    <div className="App">
     {
       user.isSignedIn ? <button className="sign-btn-style" onClick={signOut}>Sign Out</button> :
      <button className="sign-btn-style" onClick={googleSignIn}>Sign In</button>
     }
     <br/>
     <button onClick={fbSignIn}>Sign In using Facebook</button>
     {
       user.isSignedIn && <div>
              <h2>Name : {user.name}</h2>
              <p>Your Email : {user.email}</p>
              <p></p>
              <br/>
              <img src={user.photo} alt=""/>
          </div>
     }
     <br/>
         <h2>Our own Authentication</h2>
          <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
          <label htmlFor="newUser">New User Sign Up</label>

     <form action="" onSubmit={handleSubmit}>
          {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" required/>}
          <br/>
          <input type="email" name="email" onBlur={handleBlur} id=""  placeholder="write your email" required/>
          <br/>
          <input type="password" name="password" id="" onBlur={handleBlur}  placeholder="write your password" required/>
          <br/>
          <input className="sign-btn-style" type="submit" value="Sign In"/>
      </form>
        <p style={{color:'red'}}>{user.error}</p>
      {user.success && <p style={{color:'green'}}>{newUser ? 'Registration': 'Logged In'} Successfully</p>}

    </div>
  );
}

export default Login;
