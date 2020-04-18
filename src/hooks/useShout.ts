import * as firebase from 'firebase';

export function useShout() {

  const shoutLogin = async (email:any, password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };

  
  const shoutLogout = async () => {
    firebase.auth().signOut().then (resp=>{ console.log(resp); },err=>{ console.log(err); })
  };


  const shoutPost = {

    words: "Here are some posts."



  };



  const shoutRead = {

    words: "Here are some posts."

  };




  return {
    shoutLogin,
    shoutLogout,
    shoutPost,
    shoutRead
  };
}





