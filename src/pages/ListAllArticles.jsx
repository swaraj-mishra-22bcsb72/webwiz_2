import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    IconButton,
  } from '@mui/material';
  import { motion } from 'framer-motion';
  import { useNavigate } from 'react-router-dom';
  import { Timer, Group, Category, HistoryEdu } from '@mui/icons-material';
  import { trendingTopics, newsItems, onThisDay, categories } from '../data/mockData';
  
  const Section = ({ title, data, type }) => {
    const navigate = useNavigate();
  
    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: 4, maxWidth: '100vw', overflowX: 'hidden' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            pb: 1,
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': {
              background: '#ccc',
              borderRadius: 4,
            },
          }}
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((item) => (
            <Card
              key={item.id}
              sx={{
                minWidth: 300,
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
              onClick={() => {
                if (type === 'article') navigate(`/article/${item.title.replace(/\s+/g, '-').toLowerCase()}`);
                else if (type === 'category') navigate(`/category/${item.name.toLowerCase()}`);
              }}
            >
              {item.image && (
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.title || item.name}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title || item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {item.description || item.event}
                </Typography>
  
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {type === 'article' && (
                    <>
                      <Chip icon={<Category />} label={item.category} size="small" />
                      <Chip icon={<Timer />} label={item.readTime} size="small" variant="outlined" />
                      <Chip icon={<Group />} label={`${item.contributors} contributors`} size="small" variant="outlined" />
                    </>
                  )}
                  {type === 'news' && (
                    <Chip label={item.date} size="small" />
                  )}
                  {type === 'event' && (
                    <Chip icon={<HistoryEdu />} label={item.year} size="small" />
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    );
  };
  
  const ListAllArticles = () => {
    return (
        <Box
        sx={{
          px: { xs: 2, md: 6 },
          py: 4,
          maxWidth: '100%',
          overflowX: 'hidden',
          bgcolor: 'background.default',
        }}
      >
      
        <Typography variant="h4" sx={{ mb: 4 }}>
          Explore All Knowledge
        </Typography>
  
        <Section title="Trending Topics" data={trendingTopics} type="article" />
        <Section title="Latest News" data={newsItems} type="news" />
        <Section title="On This Day in History" data={onThisDay} type="event" />
        <Section title="Browse by Categories" data={categories} type="category" />
      </Box>
    );
  };
  
  export default ListAllArticles;
  