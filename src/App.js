import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {Amplify} from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import hmmm from './pruebas/p_database';
import { getCurrentUser } from 'aws-amplify/auth';

import UploadExcelFile from "./componentes/cargar-excel";

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  
  const  { username, userId, signInDetails } = getCurrentUser();  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width={100} height={100} />
            <h2>
              IA Forense. 
            </h2>
            <h3>Usuario: {user.username }</h3>
            
            <div>
              <UploadExcelFile />
              <iframe id="excel-iframe" src="" />
            </div>
            
            <button onClick={signOut}>Sign out</button>
          </header>
        </div>
      )}
        
     
    </Authenticator>
  );
}

export default App;
