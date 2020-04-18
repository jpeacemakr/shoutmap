import * as firebase from 'firebase';
//import { useState, useEffect } from "react";

export function useFirebase() {

  const userLogin = async (email:any, password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };

  
  const userLogout = async () => {
    firebase.auth().signOut().then (resp=>{ console.log(resp); },err=>{ console.log(err); })
  };


  const userCreate = async (email:any, password:any) => {
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then (resp=>{ console.log(resp, firebase.auth().currentUser); },err=>{ console.log(err); })

  };


  const logUser = () => { console.log(firebase.auth().currentUser); };


  return {
    userLogin,
    userLogout,
    logUser, 
    userCreate
  };
}





