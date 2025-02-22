import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { notifyError, notifySuccess } from '../components/Notification';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      notifySuccess('Login successful!');
    } catch {
      notifyError('Invalid credentials.');
    }
  };

  return (
    <div className='login-page'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
