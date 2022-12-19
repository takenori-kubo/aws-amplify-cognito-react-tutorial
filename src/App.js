import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExport from './aws-exports';

Amplify.configure(awsExport);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React app with AWS</h2>
        {user? (
          <>
            <h3>私は権限を持っています：{user.username}</h3>
            <button onClick={signOut}>SingOut</button>
          </>
        ) : (        
          <>
            <h3>私は権限を持っていません</h3>
          </>

        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
