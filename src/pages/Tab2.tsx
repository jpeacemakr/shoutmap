//import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState } from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow, 
         IonCol, IonImg, IonActionSheet } from '@ionic/react';


import { useShout } from '../hooks/useShout';
import { useFirebase } from '../hooks/useFirebase';



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

  const { shoutPost, shoutRead } = useShout();
  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [shouttext, setShouttext] = useState<string>();
  const [shoutlist, setShoutlist] = useState<string>();





  function logUserOnPush () {

    console.log(getEmail());
    return 1;

  }



  shoutRead(0,0,0);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Shouts near you {getEmail()}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>


          <p>
           { }
           

         </p>

         <IonButton onClick={() => logUser()}>Log the user to the console</IonButton>
         <IonButton onClick={() => logUserOnPush()}>Log the user to the console</IonButton>



      </IonContent>




    </IonPage>
  );
};

export default Tab2;
