import Notification from './components/Notification';
import AdminDashboard from './pages/AdminDashboard';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Register />
      <Notification />

      <AdminDashboard />
    </>
    // <Routes>
    //   <Route path='/register' element={<RegisterPage />} />

    //   <Route path='/login' element={<LoginPage />} />

    //   <Route path='/profile' element={<ProfilePage />} />
    // </Routes>
  );
}

export default App;
