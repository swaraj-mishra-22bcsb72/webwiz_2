import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AppBar,
  Divider,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Paper,
  Popper,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material'
import {
  Search as SearchIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const categories = ['All', 'Technology', 'Science', 'History', 'Culture'];

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 600,
  borderRadius: 12,
  padding: theme.spacing(1),
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none'
}))

const Logo = styled(motion.div)(({ theme }) => ({
  fontFamily: 'Bungee, cursive',
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  '& a': {
    color: 'inherit',
    textDecoration: 'none'
  }
}))

const Header = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [category, setCategory] = useState('Science')
  const theme = useTheme()

  const handleSearch = query => {
    setSearchQuery(query)
    setSearchResults([
      { title: 'Quantum Computing', excerpt: 'An introduction to quantum computing...', category: 'Technology' },
      { title: 'Artificial Intelligence', excerpt: 'Exploring the world of AI...', category: 'Technology' },
      { title: 'The Theory of Relativity', excerpt: 'Understanding Einstein\'s groundbreaking theory...', category: 'Science' },
      { title: 'The Big Bang Theory', excerpt: 'How the universe began...', category: 'Science' },
      { title: 'World War II', excerpt: 'A comprehensive overview of WWII...', category: 'History' },
      { title: 'The Renaissance', excerpt: 'A cultural movement that changed the world...', category: 'History' },
      { title: 'Ancient Greek Mythology', excerpt: 'Stories of gods and heroes...', category: 'Culture' },
      { title: 'The Art of Origami', excerpt: 'The Japanese art of paper folding...', category: 'Culture' },
      { title: 'General Knowledge', excerpt: 'A mix of interesting facts...', category: 'All' },
      { title: 'The Internet Revolution', excerpt: 'How the internet changed the world...', category: 'All' }
    ])
  }

  const filteredResults = category === 'All'
    ? searchResults
    : searchResults.filter(item => item.category === category)

  const groupedResults = filteredResults.reduce((acc, item) => {
    const key = item.category || 'Others'
    acc[key] = acc[key] ? [...acc[key], item] : [item]
    return acc
  }, {})

  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(8px)',
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(18, 18, 18, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
        <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to='/'>
            Wiki<span style={{ color: theme.palette.primary.main }}>pedia</span>
          </Link>
        </Logo>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SearchWrapper>
            <SearchIcon sx={{ color: theme.palette.text.secondary }} />
            <InputBase
              fullWidth
              placeholder='Search Wikipedia...'
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              sx={{ mx: 1 }}
            />
            {searchQuery && (
              <IconButton size='small' onClick={() => setSearchQuery('')}>
                <CloseIcon fontSize='small' />
              </IconButton>
            )}
            <Select
              size='small'
              value={category}
              onChange={e => setCategory(e.target.value)}
              sx={{ minWidth: 120 }}
            >
              {categories.map(cat => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </SearchWrapper>

          <Popper
            open={isSearchFocused && searchQuery && searchResults.length > 0}
            anchorEl={document.querySelector('.MuiToolbar-root')}
            placement='bottom-start'
            style={{ width: '100%', maxWidth: 600, zIndex: 1300 }}
          >
            <Paper
              elevation={3}
              sx={{ mt: 1, borderRadius: 2, maxHeight: 400, overflowY: 'auto' }}
            >
              {Object.entries(groupedResults).map(([group, items], idx) => (
                <Box key={group}>
                  {idx > 0 && <Divider />}
                  <Typography
                    sx={{
                      px: 2,
                      pt: 2,
                      fontWeight: 600,
                      fontSize: 14,
                      color: 'text.secondary'
                    }}
                  >
                    {group}
                  </Typography>
                  <List>
                    {items.map((result, index) => (
                      <ListItem
                        key={index}
                        button
                        component={Link}
                        to={`/article/${result.title.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => setIsSearchFocused(false)}
                      >
                        <ListItemText
                          primary={result.title}
                          secondary={result.excerpt}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Paper>
          </Popper>

          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: theme.palette.background.subtle,
              boxShadow: theme.shadows[1],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)'
              }
            }}
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? (
                  <LightIcon fontSize='small' />
                ) : (
                  <DarkIcon fontSize='small' />
                )}
              </motion.div>
            </AnimatePresence>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
