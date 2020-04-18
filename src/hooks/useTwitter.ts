import * as firebase from 'firebase';

export function useTwitter() {

  const twitterLogin = async (email:any, password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };

  
  const twitterLogout = async () => {
    firebase.auth().signOut().then (resp=>{ console.log(resp); },err=>{ console.log(err); })
  };


  const twitterPost = {

    words: "Here are some posts."



  };



  const twitterRead = {

    words: "Here are some posts."

  };




  return {
    twitterLogin,
    twitterLogout,
    twitterPost,
    twitterRead
  };
}





