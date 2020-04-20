//import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState, useEffect } from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow, 
         IonCol, IonImg, IonActionSheet } from '@ionic/react';


import { useShout } from '../hooks/useShout';
import { useFirebase } from '../hooks/useFirebase';

//needed for map function to work
import { map } from 'rxjs/operators';




/*
function listShouts() {

      //username, date, time, longitude, latitude, shouttext
      
      //shoutPost(0,0,0)

      var shoutData = await getShoutData(0,0,0);
      var shoutString = JSON.stringify(shoutData);

      
      

      if (shoutData) {

        console.log("shoutData:");
        console.log(shoutData);

        console.log("shoutString:");
        console.log(shoutString);


        return (
            <ul>
              <li>shoutData is found. check console</li>
              <li>{shoutString}</li>

            </ul>
        )
        

      } else {
        return <p>No shouts available.</p>;
      }

  }
*/




const Tab2: React.FC = () => {



  const { userLogin, userLogout, userCreate, logUser, getUser, getEmail, setEmail, getPassword, setPassword } = useFirebase();

  const { shoutPost, shoutRead, getShouttextlist, getShoutlist } = useShout();





  function logUserOnPush () {

    console.log(getEmail());
    return 1;

  }


  //loads the json from the api. Can't do this in main render or I get an error.
  useEffect(() => {
    console.log("Using effect. Running shoutRead.")
    //shoutRead(0,0,0);
  });





  function displayShouts ()
    {
      
      let currentShoutList = getShoutlist();
      let currentShoutTextList = getShouttextlist();

      console.log("currentShoutList in displayShouts", currentShoutList);
      console.log("currentShoutTextList in displayShouts", currentShoutTextList);

      

/*
      if (currentShoutList == undefined ) {
        console.log("shoutlist is null");
        return;

      } else {
        let superList = "<tr><th>Email</th></tr>";

        /*
        for (const currentSupersearch of currentShoutList){
              superList = superList + "<tr><td>" + currentSupersearch.username + "</td></tr>";
        }*/

        //return superList;
        //converts html string to jsx
  //      return(<><table className="container" dangerouslySetInnerHTML={{__html: superList}}></table></>);
  //    }
    }


















/*  interface Shout {
    _id: string;
    username: string;
    longitude: number;
    latitude: number;
    shouttext: string;
    date: string;
    time: string;
  }*/


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Shouts near you {getEmail()}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>


           <p>
           { getShouttextlist() }
           </p>
           
           { getShoutlist() ?

              <>{ displayShouts() }

              <ul>{ getShoutlist().map((item:any) => (<li key={item._id}> Email {item.username}</li>)) }</ul>

              </>

          : 

            <p>Click button to load shouts near you!</p>
          }
           

         

         <IonButton onClick={() => logUser()}>Log the user to the console</IonButton>
         <IonButton onClick={() => logUserOnPush()}>Log the user to the console</IonButton>
         <IonButton onClick={() => shoutRead(0,0,0)}>Load shouts</IonButton>





      </IonContent>




    </IonPage>
  );
};

export default Tab2;
