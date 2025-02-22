import { useState } from 'react';
import api from '../services/api';
import { notifyError, notifySuccess } from '../components/Notification';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      notifySuccess('Signup successful! Please check your email to verify.');
    } catch {
      notifyError('Signup failed.');
    }
  };

  return (
    <div className='signup-page'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Register;
