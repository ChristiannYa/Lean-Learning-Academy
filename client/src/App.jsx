import './App.css';
import './styles/Logo.scss';
import './styles/Nav.scss';

import Nav from './components/Nav';
import LandingPage from './pages/1-LandingPage';

const App = () => {
  return (
    <div>
      <Nav />
      <LandingPage />
    </div>
  );
};

export default App;
