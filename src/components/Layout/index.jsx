import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, sm: 9 },
          px: { xs: 2, sm: 3, md: 4 },
          pb: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 