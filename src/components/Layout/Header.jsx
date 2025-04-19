import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Paper,
  Popper,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 600,
  borderRadius: 12,
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.subtle,
}));

const Logo = styled(motion.div)(({ theme }) => ({
  fontFamily: 'Bungee, cursive',
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Header = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const theme = useTheme();

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Mock search results - replace with actual API call
    setSearchResults([
      { title: 'Article 1', excerpt: 'Description...' },
      { title: 'Article 2', excerpt: 'Description...' },
    ]);
  };

  return (
    <AppBar 
      position="fixed" 
      color="inherit" 
      elevation={0}
      sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(8px)',
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Wiki<span style={{ color: theme.palette.primary.main }}>pedia</span></Link>
        </Logo>

        <Box sx={{ flex: 1, mx: 4 }}>
          <SearchWrapper>
            <SearchIcon sx={{ mx: 1, color: theme.palette.text.secondary }} />
            <InputBase
              fullWidth
              placeholder="Search Wikipedia..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              sx={{ ml: 1 }}
            />
            {searchQuery && (
              <IconButton size="small" onClick={() => setSearchQuery('')}>
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </SearchWrapper>

          <Popper
            open={isSearchFocused && searchResults.length > 0}
            anchorEl={document.querySelector('.MuiToolbar-root')}
            placement="bottom-start"
            style={{ width: '100%', maxWidth: 600, zIndex: 1300 }}
          >
            <Paper elevation={3} sx={{ mt: 1, borderRadius: 2 }}>
              <List>
                {searchResults.map((result, index) => (
                  <ListItem 
                    key={index} 
                    button 
                    component={Link} 
                    to={`/article/${result.title}`}
                  >
                    <ListItemText 
                      primary={result.title}
                      secondary={result.excerpt}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </Box>

        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          sx={{ 
            p: 1,
            borderRadius: 2,
            backgroundColor: theme.palette.background.subtle,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={darkMode ? 'dark' : 'light'}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {darkMode ? <LightIcon /> : <DarkIcon />}
            </motion.div>
          </AnimatePresence>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 