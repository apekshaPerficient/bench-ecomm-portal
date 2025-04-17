
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { authBanner } from '../../assets/images';

const Signin = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          flex: '0 0 60%',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 6, width: '100%', maxWidth: 500 }}>
          {/* Logo */}
          <Box sx={{ mb: 2, textAlign: 'left' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            eCom  
          </Typography>
          </Box>

          {/* Title */}
          <Typography variant="h5" gutterBottom textAlign="center">
            Sign In
          </Typography>

          {/* Username */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />

          {/* Password */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 5 }}
          >
            Login
          </Button>
        </Paper>
      </Box>

      <Box
        sx={{
          display:'flex',
          flex: '0 0 40%',
          alignItems:'center'
        }}
      >
      <img src={authBanner} alt='auth_banner'/>
      </Box>
    </Box>
  );
};

export default Signin;