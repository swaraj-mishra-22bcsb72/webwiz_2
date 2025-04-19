import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  Article as ArticleIcon,
  Category as CategoryIcon,
  Bookmark as BookmarkIcon,
  History as HistoryIcon,
  Menu as MenuIcon,
  Forum as ForumIcon,
  TravelExplore as ExploreIcon // ✅ Added Explore Icon
} from '@mui/icons-material';

const DRAWER_WIDTH = 240;

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Articles', icon: <ArticleIcon />, path: '/articles' },
    // { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
    { text: 'Bookmarks', icon: <BookmarkIcon />, path: '/bookmarks' },
    { text: 'History', icon: <HistoryIcon />, path: '/history' },
    { text: 'Forum', icon: <ForumIcon />, path: '/talks' },
    { text: 'Explore', icon: <ExploreIcon />, path: '/explore' } // ✅ New Explore Option
  ];

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                py: 1.5,
                px: 3,
                '&.Mui-selected': {
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.04)',
                  borderRight: `3px solid ${theme.palette.primary.main}`,
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(0, 0, 0, 0.08)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            position: 'fixed',
            left: 16,
            top: 12,
            zIndex: theme.zIndex.appBar + 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Box
        component="nav"
        sx={{
          width: { md: DRAWER_WIDTH },
          flexShrink: { md: 0 },
        }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              border: 'none',
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(18, 18, 18, 0.6)'
                : 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRight: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
