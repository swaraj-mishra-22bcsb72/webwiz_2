import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Popover,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, TrendingUp, Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import aiImage from '../assets/ai.webp';
import mlImage from '../assets/ml.webp';
import dlImage from '../assets/dl.webp';

const Home = () => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showTrending, setShowTrending] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);

  // Handle card click for preview
  const handleCardClick = (event, article) => {
    event.stopPropagation(); // Prevent navigation
    setSelectedArticle(article);
    setAnchorEl(event.currentTarget);
  };

  // Handle preview close
  const handlePreviewClose = () => {
    setSelectedArticle(null);
    setAnchorEl(null);
  };

  // Handle navigation to full article
  const handleReadMore = (article) => {
    navigate(`/article/${article.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const open = Boolean(anchorEl);

  const trendingTopics = [
    "Breaking: AI System Achieves Human-Level Performance in Medical Diagnosis",
    "New Quantum Computing Breakthrough: 1000 Qubit Processor Developed",
    "SpaceX Successfully Launches First Civilian Mission to Mars",
    "Revolutionary Battery Technology Promises Week-Long Phone Life",
    "Scientists Discover New Clean Energy Source in Deep Ocean Vents",
    "Global AI Summit Announces Groundbreaking Ethics Framework",
    "Flying Cars Get FAA Approval for Urban Transportation",
    "Brain-Computer Interface Allows Direct Text Input by Thought",
    "Renewable Energy Surpasses Fossil Fuels in Global Usage",
    "New DNA Storage Technology Can Hold Library of Congress in a Teaspoon",
    "Artificial Photosynthesis Breakthrough Could Solve Climate Crisis",
    "Quantum Internet Prototype Successfully Links Three Cities",
    "Robot Surgeons Outperform Humans in Complex Procedures",
    "Universal Language Translator Breaks All Language Barriers",
    "Self-Healing Materials Revolution in Manufacturing Industry"
  ];

  const TrendingNews = () => {
    const [index, setIndex] = useState(0);
    const [displayedTopics, setDisplayedTopics] = useState([]);

    useEffect(() => {
      if (showTrending) {
        // Shuffle the topics array when component mounts
        const shuffledTopics = [...trendingTopics]
          .sort(() => Math.random() - 0.5)
          .slice(0, 8); // Take 8 random topics
        
        setDisplayedTopics(shuffledTopics);

        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % shuffledTopics.length);
        }, 2000); // Change every 2 seconds

        return () => {
          clearInterval(interval);
          setIndex(0);
        };
      }
    }, [showTrending]);

    return (
      <AnimatePresence mode="wait">
        {showTrending && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Paper
              elevation={4}
              sx={{
                position: 'fixed',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: 800,
                zIndex: 1000,
                borderRadius: 2,
                bgcolor: (theme) => 
                  theme.palette.mode === 'dark' 
                    ? 'rgba(0,0,0,0.9)' 
                    : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  mb: 1 
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUp color="primary" />
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main'
                      }}
                    >
                      TRENDING NOW
                    </Typography>
                  </Box>
                  <IconButton 
                    size="small" 
                    onClick={() => setShowTrending(false)}
                    sx={{
                      '&:hover': {
                        transform: 'rotate(90deg)',
                        transition: 'transform 0.2s'
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Box sx={{ 
                  height: '60px', 
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  <AnimatePresence mode="wait">
  <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%' }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: 1.4,
                          color: (theme) => 
                            theme.palette.mode === 'dark' 
                              ? 'grey.300' 
                              : 'grey.800'
                        }}
                      >
                        {displayedTopics[index]}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                <Box sx={{ 
                  mt: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 0.5
                }}>
                  {displayedTopics.map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        bgcolor: i === index ? 'primary.main' : 'grey.300',
                        transition: 'background-color 0.3s'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const featuredArticles = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description:
        'The theory and development of computer systems able to perform tasks that normally require human intelligence.',
      image: aiImage,
      category: 'Technology',
      readTime: '8 min read',
      preview: {
        overview: `Artificial Intelligence (AI) represents one of the most transformative technologies of our time. 
                  It encompasses various subfields including machine learning, natural language processing, and robotics.`,
        keyPoints: [
          'Pattern Recognition and Analysis',
          'Decision Making Algorithms',
          'Natural Language Processing',
          'Computer Vision',
          'Robotics and Automation'
        ],
        applications: [
          'Healthcare diagnostics and treatment planning',
          'Autonomous vehicles and transportation',
          'Virtual assistants and chatbots',
          'Financial trading and fraud detection'
        ],
        impact: `AI continues to reshape industries and society, promising increased efficiency 
                while raising important ethical considerations about its deployment and governance.`
      }
    },
    {
      id: 2,
      title: 'Machine Learning',
      description:
        'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
      image: mlImage,
      category: 'Technology',
      readTime: '6 min read',
      preview: {
        overview: `Machine Learning is a revolutionary approach to data analysis and automation that allows systems to learn and improve from experience.`,
        keyPoints: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Reinforcement Learning',
          'Deep Learning Integration',
          'Model Training and Validation'
        ],
        applications: [
          'Predictive analytics',
          'Image and speech recognition',
          'Recommendation systems',
          'Market analysis'
        ],
        impact: `Machine Learning is transforming how we approach problem-solving across industries, from healthcare to finance.`
      }
    },
    {
      id: 3,
      title: 'Deep Learning',
      description:
        'A specialized branch of ML that uses artificial neural networks to model and understand complex patterns in data.',
      image: dlImage,
      category: 'Technology',
      readTime: '7 min read',
      preview: {
        overview: `Deep Learning leverages artificial neural networks to process vast amounts of data and uncover intricate patterns.`,
        keyPoints: [
          'Convolutional Neural Networks (CNNs)',
          'Recurrent Neural Networks (RNNs)',
          'Transfer Learning',
          'Generative Adversarial Networks (GANs)',
          'Hyperparameter Optimization'
        ],
        applications: [
          'Image and video analysis',
          'Natural language understanding',
          'Autonomous systems',
          'Drug discovery and genomics'
        ],
        impact: `Deep Learning is driving breakthroughs in AI, enabling advancements in fields like healthcare, entertainment, and autonomous technologies.`
      }
    },
    {
      id: 4,
      title: 'Neural Networks',
      description:
        'Computing systems inspired by biological neural networks that form the basis of modern AI and deep learning.',
      image: aiImage,
      category: 'Technology',
      readTime: '5 min read',
      preview: {
        overview: `Neural Networks are the foundation of modern AI, mimicking the structure and function of the human brain to process information.`,
        keyPoints: [
          'Feedforward Networks',
          'Backpropagation',
          'Activation Functions',
          'Multilayer Perceptrons',
          'Optimization Techniques'
        ],
        applications: [
          'Speech-to-text systems',
          'Fraud detection',
          'Personalized recommendations',
          'Weather forecasting'
        ],
        impact: `Neural Networks have revolutionized AI, enabling machines to perform tasks with human-like accuracy and efficiency.`
      }
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Welcome to Wikipedia
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            The Free Encyclopedia that Anyone Can Edit
          </Typography>
          
          {/* Add Trending Now Button */}
          <Button
            variant="contained"
            startIcon={<TrendingUp />}
            onClick={() => setShowTrending(true)}
            sx={{
              mt: 3,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              py: 1.5,
              px: 3,
              fontWeight: 600,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: (theme) => theme.shadows[4],
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Show Trending Topics
          </Button>
        </Box>

        {/* Featured Articles */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
            Featured Articles
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {featuredArticles.map((article) => (
              <Grid item xs={12} sm={6} md={6} key={article.id}>
                <Card
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    cursor: 'pointer',
                    borderRadius: 2,
                    maxWidth: '500px',
                    mx: 'auto',
                    height: '220px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    {/* Image Section */}
                    <Box sx={{ width: '40%' }}>
                      <CardMedia
                        component="img"
                        image={article.image}
                        alt={article.title}
                        sx={{
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ width: '60%' }}>
                      <CardContent sx={{ height: '100%', p: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {article.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {article.description}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          gap: 1, 
                          mt: 'auto',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Chip label={article.category} size="small" color="primary" />
                            <Chip
                              icon={<Timer sx={{ fontSize: 16 }} />}
                              label={article.readTime}
                              size="small"
                              variant="outlined"
                            />
                          </Box>
                          <Button
                            size="small"
                            onClick={(e) => handleCardClick(e, article)}
                            sx={{ minWidth: 'auto' }}
                          >
                            Preview
                          </Button>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Preview Popover */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePreviewClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              width: 400,
              p: 3,
              overflow: 'hidden',
            },
          }}
        >
          {selectedArticle?.preview && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {selectedArticle.title}
                </Typography>
                <IconButton size="small" onClick={handlePreviewClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
              
              <Typography variant="body2" color="text.secondary">
                {selectedArticle.preview.overview}
              </Typography>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Key Points
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selectedArticle.preview.keyPoints.map((point, index) => (
                    <Chip
                      key={index}
                      label={point}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Applications
                </Typography>
                {selectedArticle.preview.applications.map((app, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      '&:before': { 
                        content: '"•"', 
                        mr: 1 
                      } 
                    }}
                  >
                    {app}
                  </Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Impact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedArticle.preview.impact}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  handlePreviewClose();
                  handleReadMore(selectedArticle);
                }}
                sx={{ mt: 1 }}
              >
                Read Full Article
              </Button>
            </Box>
          )}
        </Popover>

        {/* Add the Trending News component */}
        <TrendingNews />
      </Container>
    </motion.div>
  );
};

export default Home; 
