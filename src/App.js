import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/pages/Login';
import { PickContactDetailForAuth } from './components/pages/PickContactDetailForAuth';
import { EnterAuthCode } from './components/pages/EnterAuthCode';
import { WelcomePage } from './components/pages/Welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/pickContactDetails"
          element={<PickContactDetailForAuth />}
        />
        <Route path="/enterAuthCode" element={<EnterAuthCode />}></Route>
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
