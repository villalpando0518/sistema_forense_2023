
import './App.css';
import React, { useEffect, useState } from 'react';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { Auth } from 'aws-amplify';

Amplify.configure(awsExports);


function App() {
  
  const [user, setUser] = useState(null);
  useEffect(() => {
   
    async function fetchAuthenticatedUser() {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUser(userInfo.attributes); 
    }

    fetchAuthenticatedUser();
  }, []);
  return (
    <div>
      <h1>App Forense hmmmmm</h1>
      <p>Usuario: {user ? user.name : 'Ningún usuario autenticado'}</p>
    </div>
  );
}

export default withAuthenticator(App);

// prueba de commit