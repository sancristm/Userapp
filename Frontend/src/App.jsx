import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
//import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
