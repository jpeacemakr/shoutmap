import React from 'react';
import { useState } from 'react';

import { IonContent, IonHeader, IonInput, IonTextarea, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import { useFirebase } from '../hooks/useFirebase';
import { useShout } from '../hooks/useShout';



const Tab3: React.FC = () => {

  const { shouttext, getShouttext, createShout, setShouttext, createShoutGPS, createShoutGPSWithToken } = useShout();
  const { getUser, getEmail } = useFirebase();
  //const { getGPSlongitude, getGPSlatitude, newGPS } = useGPS();

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar color="primary">
          <IonTitle>Shout your location: {getEmail()}</IonTitle>
        </IonToolbar>

      </IonHeader>
      

      <IonContent>
        
        <div style={{ padding:"15px", margin:"15px" }}>

          {/*<IonInput value={getShouttext()} placeholder='Type your shout here.' type='text' onIonChange={e => setShouttext(e.detail.value!)} ></IonInput>*/}

          <IonTextarea rows={8} value={shouttext} placeholder='Type your shout here.' onIonChange={e => setShouttext(e.detail.value!)} ></IonTextarea>

        </div>

      </IonContent>



      <IonFooter style={{textAlign:"center", background:"#99CCFF", padding:"15px"}}>
          
          {/*<IonButton onClick={() => createShout({username:getEmail(), shouttext:shouttext, longitude: -1.2323, latitude: 1.98774 })}>SHOUT YOUR FAKE LOCATION</IonButton>*/}
       
          {/*<IonButton onClick={() => createShoutGPS(shouttext)}>SHOUT YOUR LOCATION</IonButton>*/}

          <IonButton onClick={() => createShoutGPSWithToken(shouttext)}>SHOUT YOUR LOCATION WITH TOKEN</IonButton>

      </IonFooter>


    </IonPage>
  );
};

export default Tab3;
