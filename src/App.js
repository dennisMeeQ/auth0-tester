import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

// import { useAuth0 } from './auth/react-auth0-spa';
import auth0Config from './config/auth0.config.json';

const { audience } = auth0Config;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleClick = () => loginWithRedirect({ audience });

  return (
    <Button onClick={handleClick} color="primary" variant="outlined">
      Login
    </Button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleClick = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <Button onClick={handleClick} color="primary" variant="outlined">
      Logout
    </Button>
  );
};

const App = () => {
  const [token, setToken] = useState();
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const fn = async () => {
      try {
        setToken(await getAccessTokenSilently());
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, [isAuthenticated]);

  return (
    <>
      <div>
        App.js: User: {JSON.stringify(user)}
        {isAuthenticated ? <div>logged in</div> : <div>logged out</div>}
        token: {JSON.stringify(token)}
      </div>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    </>
  );
};

export default App;
