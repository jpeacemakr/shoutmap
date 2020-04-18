import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useShout } from '../hooks/useShout';
import { createShout } from '../lib/utils';

//var Shout = require('../lib/utils');


const Tab3: React.FC = () => {

  const { shoutPost, shoutRead } = useShout();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tweet your location</IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonContent>
        



      </IonContent>

      <IonFooter style={{textAlign:"center", background:"#99CCFF", padding:"15px"}}>
               
          <textarea rows={5} style={{width:"100%"}} />
          <IonButton onClick={() => createShout({username:"jpeacemakr@yahoo.com"})}>TWEET YOUR LOCATION</IonButton>
       
      </IonFooter>



    </IonPage>
  );
};

export default Tab3;
