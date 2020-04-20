import * as firebase from 'firebase';
import React, { useState } from 'react';
require("isomorphic-fetch");




export function useShout() {

  const [shoutlist, setShoutlist] = useState();
  const [shoutlisttext, setShoutlisttext] = useState();




  const shoutRead = async (longValue:any, latValue:any, distanceValue:any) => {
    var url = `http://localhost/api/allshouts?longitude=${longValue}+lat=${latValue}+dist=${distanceValue}`;
    var shoutText;

    setShoutlist(fetch(url)
    .then(resp=>{ console.log("FETCHING", "URL", url, "resp", resp); return resp.json(); }, err=>{ console.log(err); })
    .then((responseJSON) => {
        console.log("responseJSON", responseJSON);
        shoutText = JSON.stringify(responseJSON);
        console.log("shoutText", shoutText);
        setShoutlisttext(shoutText);
        console.log("shoutlisttext", shoutlisttext);
        return responseJSON;

    }));

  };



  const getShouttextlist = () => {
    return shoutlisttext;
  };




  const shoutPost = async (longValue:any, latValue:any, distanceValue:any) => {
    var url = `http://localhost/api/allshouts?longitude=${longValue}+lat=${latValue}+dist=${distanceValue}`;
    fetch(url)
    .then(resp=>{ console.log(url,resp); }, err=>{ console.log(err); })
  };




  return {
    shoutPost,
    shoutRead, 
    getShouttextlist
  };
}





