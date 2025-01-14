import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null); // Store user data or null initially
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          window.location.href = '/login'; // Redirect to login if no token
          return;
        }

        const { data } = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('jwt'); // Clear token on unauthorized
          window.location.href = '/login';
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('jwt');
      if (!token) return;

      const { data } = await axios.put('/api/users/profile', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(data);
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant='h6'>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Welcome {userData.name}
          </Typography>

          {/* Show user data */}
          {!isEditing && userData && (
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant='h6'>{userData.name}</Typography>
              <Typography variant='body1'>{userData.email}</Typography>
              <Button
                variant='contained'
                sx={{ mt: 3 }}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
              <Button
                variant='outlined'
                color='error'
                sx={{ mt: 2 }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          )}

          {/* Show form for editing */}
          {isEditing && (
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    name='name'
                    value={userData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    type='email'
                    value={userData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    value={userData.password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Save Changes
              </Button>
              <Button
                fullWidth
                variant='outlined'
                sx={{ mb: 2 }}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
