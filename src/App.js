import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/pages/Login';
import { DisplayContactDetailForAuth } from './components/pages/DisplayContactDetailForAuth';
import { EnterAuthCode } from './components/pages/EnterAuthCode';
import { WelcomePage } from './components/pages/Welcome';
import { NotFound } from './components/pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/displayContactDetails"
          element={<DisplayContactDetailForAuth />}
        />
        <Route path="/enterAuthCode" element={<EnterAuthCode />}></Route>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
