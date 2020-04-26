import React from 'react';
import { IonContent, 
  IonHeader, 
  IonInput, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonFooter } from '@ionic/react';
import { useFirebase } from '../hooks/useFirebase';
import './Tab1.css';



const Tab1: React.FC = () => {

  const { email, 
    password, 
    userLogin, 
    userLogout, 
    userCreate, 
    getEmail,
    //logUser, 
    setEmail, 
    setPassword } = useFirebase();
  
  
  //used for testing purposes only
  /* function logUserOnPush () {
    console.log(getEmail());
    return 1;
  }*/

  var userEmail = getEmail();


  return (
    <IonPage>


      <IonHeader>

        <IonToolbar  color="primary">
          <IonTitle>Log in/Log out: {userEmail}</IonTitle>
        </IonToolbar>

      </IonHeader>



      <IonContent>

        <div style={{ padding:"15px", margin:"15px" }}>
        
        <h1>Welcome to ShoutMap!</h1>
        <p>This app uses GPS coordinates to post messages to the server. This is a class project by James Peacemaker, a student at the University of Mary Washington. It uses Ionic with a Google Firebase login and a MongoDB database for storing messages.</p>
        <p>Log in to begin using the app:</p>
        <br />
        <p>
        Email address:
        <IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
        <br />
        Password:
        <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>

        {/*<IonButton onClick={() => logUser()}>Log the user to the console</IonButton>*/}
        {/*<IonButton onClick={() => logUserOnPush()}>Log the user to the console</IonButton>*/}
        </p>

        </div>        

      </IonContent>



      <IonFooter style={{textAlign:"center", background:"#99CCFF", padding:"15px"}}>

        <IonButton onClick={ () => userLogin(email, password) }>Log in</IonButton>
        <IonButton onClick={ () => { userLogout() } }>Log out</IonButton>
        <IonButton onClick={ () => { userCreate(email, password) } }>Create user</IonButton>
        {/*<IonButton onClick={ () => { userEmail = getEmail();} }>Update Email Test</IonButton>*/}


      </IonFooter>



    </IonPage>
  );
};

export default Tab1;
