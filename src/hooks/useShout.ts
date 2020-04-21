import * as firebase from 'firebase';
import React, { useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { useGPS } from '../hooks/useGPS';

require("isomorphic-fetch");


export function useShout() {

  var [shoutlist, setShoutlist] = useState();
  var [shoutlisttext, setShoutlisttext] = useState();
  var [shouttext, setShouttext] = useState();

  const { getUser, getEmail } = useFirebase();
  const { getGPSlongitude, getGPSlatitude, newGPS } = useGPS();



  const shoutRead = async (longValue:any, latValue:any, distanceValue:any) => {
    var url = `http://localhost/api/allshouts?longitude=${longValue}+lat=${latValue}+dist=${distanceValue}`;
    var shoutText = " ";

    var shoutToReturn = await fetch(url)
    .then(resp=>{ console.log("FETCHING", "URL", url, "resp", resp); return resp.json(); }, err=>{ console.log(err); })

    .then((responseJSON) => {
        console.log("responseJSON", responseJSON);

        shoutText = JSON.stringify(responseJSON);
        console.log("shoutText", shoutText);
    
        shoutlisttext = setShoutlisttext(shoutText);
        
        shoutlist = setShoutlist(responseJSON);
  
      }).then(() => {

        console.log("shoutlisttext", shoutlisttext);
        console.log("shoutlist", shoutlist);

      });
  
  };



  const getShouttextlist = () => {
    return shoutlisttext;
  };


  const getShoutlist = () => {
    return shoutlist;
  };


/*
  const shoutPost = async (longValue:any, latValue:any, distanceValue:any) => {
    var url = `http://localhost/api/allshouts?longitude=${longValue}+lat=${latValue}+dist=${distanceValue}`;
    fetch(url)
    .then(resp=>{ console.log(url,resp); }, err=>{ console.log(err); })
  };
*/






//post request
//user_info is json object with username and password
const createShout = (shout_info:any) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  console.log(shout_info);  
  const searchParams = new URLSearchParams(shout_info);
  
  console.log("searchParams", searchParams);  

  return fetch("/api/newshout", {
    method: "POST",
    headers: header,
    body: searchParams

  }).then(function(resp) {
    var shoutReturn = resp.json();
    console.log("returning json", shoutReturn);
    return shoutReturn;
  });
}



  const getShouttext = () => { return shouttext; };



  return {
    shouttext,

    shoutRead,
    getShoutlist, 
    getShouttextlist,

    createShout,
    getShouttext, 
    setShouttext
  };
}





