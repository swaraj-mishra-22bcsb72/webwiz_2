import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Container, Form } from 'react-bootstrap';
import { IconButton, InputBase, Paper } from '@mui/material';
import {
  Search as SearchIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Navbar = ({ darkMode, setDarkMode, toggleSidebar }) => {
  return (
    <BsNavbar 
      bg={darkMode ? 'dark' : 'light'} 
      variant={darkMode ? 'dark' : 'light'} 
      expand="lg" 
      className="border-bottom"
    >
      <Container fluid>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleSidebar}
          className="d-lg-none me-2"
        >
          <MenuIcon />
        </IconButton>

        <BsNavbar.Brand as={Link} to="/" className="me-4">
          <span className="fw-bold text-primary">Wiki-pedia</span>
        </BsNavbar.Brand>

        <div className="d-flex flex-grow-1 align-items-center">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', sm: 400 },
              backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Wikipedia..."
              inputProps={{ 'aria-label': 'search wikipedia' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <IconButton
            sx={{ ml: 2 }}
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
          >
            {darkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </div>
      </Container>
    </BsNavbar>
  );
};

export default Navbar; 