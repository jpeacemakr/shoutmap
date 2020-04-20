import * as firebase from 'firebase';
import React, { useState } from 'react';
require("isomorphic-fetch");




export function useShout() {

  var [shoutlist, setShoutlist] = useState();
  var [shoutlisttext, setShoutlisttext] = useState();




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



  const shoutPost = async (longValue:any, latValue:any, distanceValue:any) => {
    var url = `http://localhost/api/allshouts?longitude=${longValue}+lat=${latValue}+dist=${distanceValue}`;
    fetch(url)
    .then(resp=>{ console.log(url,resp); }, err=>{ console.log(err); })
  };




  return {
    shoutPost,
    shoutRead,
    getShoutlist, 
    getShouttextlist
  };
}





