import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  Button,
  Chip
} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TrendingUp, Timer, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import aiImage from '../assets/ai.webp';
// import climateImage from '../assets/climate.avif';
// import quantumImage from '../assets/quantum.webp';
import mlImage from '../assets/ml.webp';
import dlImage from '../assets/dl.webp';

const Home = () => {
  const navigate = useNavigate();

  const featuredArticles = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "The theory and development of computer systems able to perform tasks that normally require human intelligence.",
      image: aiImage,
      category: "Technology",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "A subset of artificial intelligence that enables systems to learn and improve from experience.",
      image: mlImage,
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Deep Learning",
      description: "Part of machine learning based on artificial neural networks with representation learning.",
      image: dlImage,
      category: "Technology",
      readTime: "7 min read"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ my: 8, textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>
            Welcome to Wikipedia
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            The Free Encyclopedia that Anyone Can Edit
          </Typography>
        </Box>

        {/* Featured Articles */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Featured Articles
          </Typography>
          <Grid container spacing={4}>
            {featuredArticles.map((article) => (
              <Grid item xs={12} md={4} key={article.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                  onClick={() => navigate(`/article/${article.title.replace(/\s+/g, '-').toLowerCase()}`)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.image}
                    alt={article.title}
                    sx={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {article.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip 
                        label={article.category} 
                        size="small"
                        color="primary"
                      />
                      <Chip 
                        icon={<Timer sx={{ fontSize: 16 }} />}
                        label={article.readTime} 
                        size="small" 
                        variant="outlined" 
                      />
                    </Box>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Home;