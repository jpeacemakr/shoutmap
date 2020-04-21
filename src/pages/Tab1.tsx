import React from 'react';
import { IonContent, IonHeader, IonFabButton, IonInput, IonPage, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonRouterOutlet,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSearchbar, IonButton, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useFirebase } from '../hooks/useFirebase';
import './Tab1.css';

import { useShout } from '../hooks/useShout';


const Tab1: React.FC = () => {

  const { email, password, userLogin, userLogout, userCreate, logUser, getUser, getEmail, setEmail, getPassword, setPassword } = useFirebase();
  //const { shoutPost, shoutRead } = useShout();

  
  //used for testing purposes only
  function logUserOnPush () {
    console.log(getEmail());
    return 1;
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="primary">
          <IonTitle>Log in/Log out {getEmail()}</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <div>
        
        
        <>
        Email address:
        <IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
        <br />
        Password:
        <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        <IonButton onClick={() => userLogin(email, password)}>Log in</IonButton>
        <IonButton onClick={() => userLogout()}>Log out</IonButton>
        <IonButton onClick={() => userCreate(email, password)}>Create user</IonButton>
        </>
        

        </div>        

        {/*<IonButton onClick={() => logUser()}>Log the user to the console</IonButton>*/}
        {/*<IonButton onClick={() => logUserOnPush()}>Log the user to the console</IonButton>*/}


      </IonContent>

    </IonPage>
  );
};

export default Tab1;
