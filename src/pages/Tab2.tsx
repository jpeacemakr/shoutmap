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


const Tab2: React.FC = () => {

  const { shoutPost, shoutRead } = useShout();
  const [email, setEmail] = useState<string>();
  const { logUser } = useFirebase();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Shouts near you {email}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>



         <IonButton onClick={() => logUser()}>Log the user to the console</IonButton>

      </IonContent>




    </IonPage>
  );
};

export default Tab2;
