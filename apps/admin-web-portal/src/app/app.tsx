// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Banner } from '@test-integrated-react-app/shared-web';
import { LoginPage }  from '@test-integrated-react-app/login';
import { UserPage }  from '@test-integrated-react-app/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/user" element={ <UserPage  username={'alex'} password={''} token={''} /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
