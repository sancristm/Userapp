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
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`, // Assuming JWT is stored in localStorage
          },
        });
        setUserData(data);
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle profile update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put('/api/users/profile', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });
      setUserData(data);
      setIsEditing(false); // Exit editing mode after successful update
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('jwt'); // Remove JWT from localStorage
    window.location.href = '/login'; // Redirect to login page
  };

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
            {isEditing ? 'Edit Profile' : 'Profile'}
          </Typography>
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
                  disabled={!isEditing}
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
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            {isEditing ? (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </Box>
          <Button
            fullWidth
            variant='outlined'
            color='error'
            sx={{ mt: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
