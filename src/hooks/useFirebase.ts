import * as firebase from 'firebase';
import { useState, useEffect } from "react";




export function useFirebase() {

  


  const [email, setEmail] = useState<string>();

/*
//does not update when switching between tabs. only when loading.

  const [email, setEmail] = useState<string>(() => {
    console.log("SETTING EMAIL");
    let user = firebase.auth().currentUser;
    if (user != null) {
      if (user.email != null) {
            return user.email;
      } 
    }
    return " ";
  })



  useEffect(() => {
  
    let user = firebase.auth().currentUser;
    if (user != null) {
      if (user.email != null) {
            setEmail(user.email);
      } 
    }
  })

*/


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


  const getEmail = () => { return email; };
  const getPassword = () => { return password; };



  return {
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





