import * as firebase from 'firebase';

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
	.then (resp=>{ console.log(resp); },err=>{ console.log(err); })

  };




  return {
    userLogin,
    userLogout,
    userCreate
  };
}





