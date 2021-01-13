import React from 'react';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
