import * as firebase from 'firebase';
import { useState, useEffect } from "react";




export function useFirebase() {

  


  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();



  const userLogin = async (email:any, password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };

  
  const userLogout = async () => {
    firebase.auth().signOut().then (resp=>{ console.log(resp); },err=>{ console.log(err); });
    setEmail("");
  };


  const userCreate = async (email:any, password:any) => {
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then (resp=>{ console.log(resp, firebase.auth().currentUser); },err=>{ console.log(err); })

  };


  const logUser = () => { console.log(firebase.auth().currentUser); };
  const getUser = firebase.auth().currentUser;


  const getEmail = () => { 
    if (getUser) {
        console.log("getUser.email", getUser.email)
        return getUser.email;
    } else {
      console.log("getUser is null")  
      //return " "; 
    };
  }


  const getPassword = () => { return password; };



  return {
    email,
    password,
    userLogin,
    userLogout,
    logUser, 
    userCreate,
    getUser,
    setEmail, 
    getEmail, 
    setPassword, 
    getPassword
  };
}





