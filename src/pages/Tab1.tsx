import React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonFabButton, IonInput, IonPage, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonRouterOutlet,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSearchbar, IonButton, IonFooter } from '@ionic/react';

//import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import { useFirebase } from '../hooks/useFirebase';
import './Tab1.css';
import { useShout } from '../hooks/useShout';


const Tab1: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { userLogin, userLogout, userCreate } = useFirebase();
  const { shoutPost, shoutRead } = useShout();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Log in/Log out</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <p>
        Email address:
        <IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
        <br />
        Password:
        <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        <IonButton onClick={() => userLogin(email, password)}>Log in</IonButton>
        <IonButton onClick={() => userLogout()}>Log out</IonButton>
        <IonButton onClick={() => userCreate(email, password)}>Create user</IonButton>

        </p>        
        <p>
        {shoutPost.words}
        </p>



      </IonContent>




    </IonPage>
  );
};

export default Tab1;
