import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
// import { Auth0Provider } from './auth/react-auth0-spa';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import history from './history';
import auth0Config from './config/auth0.config.json';

ReactDOM.render(
  // <Auth0Provider
  //   domain={auth0Config.domain}
  //   client_id={auth0Config.clientId}
  //   audience={auth0Config.audience}
  //   redirect_uri={window.location.origin}
  // >
  //   <App />
  // </Auth0Provider>,
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    redirectUri={window.location.origin}
    // onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
