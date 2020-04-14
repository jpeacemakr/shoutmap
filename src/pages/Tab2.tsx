//import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState } from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow, 
         IonCol, IonImg, IonActionSheet } from '@ionic/react';




const Tab2: React.FC = () => {

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Tweets near you</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>



        <ExploreContainer name="Explore" />
      </IonContent>




    </IonPage>
  );
};

export default Tab2;
