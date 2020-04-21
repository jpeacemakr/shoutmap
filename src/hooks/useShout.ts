//this is a hook that is used to list shouts and post shouts using GPS coordinates

import * as firebase from 'firebase';
import React, { useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { Plugins } from '@capacitor/core';

require("isomorphic-fetch");


export function useShout() {

  var [shoutlist, setShoutlist] = useState(); //the list of shouts
  var [shoutlisttext, setShoutlisttext] = useState(); //the list of shouts in text form. for testing only
  var [shouttext, setShouttext] = useState(); //the text of the shoutbeing posted

  const { getUser, getEmail } = useFirebase(); //used to retrieve the user email address

  const { Geolocation } = Plugins;


  //retrieves the list of shouts from mongodb. then saves the list of shouts to the shoutlist variable.
  //also saves a text version to shoutlisttest. for testing purposes.
  //makes a get request to the api
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






//This is for testing purposes only. it posts without GPS coordinates
//user_info is json object with username and password
//makes a post request to the api
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




//retrieves the GPS coordinates and user's email then posts the message to mongodb.
//makes a post request to the api
const createShoutGPS = async (shoutString:string) => {


  //create the json for the post rquest, starting with the header, then add body
  const header = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };

  var tempGPS = await Geolocation.getCurrentPosition(); //get GPS location

  const shoutInfo = { 
    username: getEmail(),
    shouttext: shoutString,
    longitude: tempGPS.coords.longitude.toString(),
    latitude: tempGPS.coords.latitude.toString(),
    date: "Dec 12, 2019", 
    time: "12:34 a.m."
  }
  console.log("shoutInfo", shoutInfo);  


  //send the post request
  const searchParams = new URLSearchParams(shoutInfo);
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
    createShoutGPS,

    getShouttext, 
    setShouttext
  };
}





