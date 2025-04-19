import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import aiImage from '../assets/ai.webp'; // Import your images

// Enhanced topics with more detailed content
const topics = [
    {
        id: 1,
        title: 'Quantum Computing',
        description: 'Explore the mysterious world of qubits and quantum entanglement.',
        image: aiImage, // Replace with appropriate image
        content: {
            introduction: 'Quantum computing harnesses quantum mechanics to process information in revolutionary ways.',
            keyPoints: [
                'Quantum bits or qubits can exist in multiple states simultaneously',
                'Quantum entanglement enables instant communication between particles',
                'Quantum computers can solve complex problems exponentially faster'
            ],
            relatedTopics: [
                { name: 'Quantum Mechanics', difficulty: 'Advanced' },
                { name: 'Quantum Cryptography', difficulty: 'Intermediate' },
                { name: 'Quantum Algorithms', difficulty: 'Expert' }
            ]
        }
    },
    {
        id: 2,
        title: 'Artificial Intelligence',
        description: 'Dive into the world of intelligent machines and neural networks.',
        image: aiImage,
        content: {
            introduction: 'Artificial Intelligence enables machines to mimic human intelligence and perform tasks autonomously.',
            keyPoints: [
                'AI is transforming industries like healthcare, finance, and transportation',
                'Machine learning is a subset of AI focused on data-driven learning',
                'Deep learning uses neural networks to solve complex problems'
            ],
            relatedTopics: [
                { name: 'Machine Learning', difficulty: 'Intermediate' },
                { name: 'Neural Networks', difficulty: 'Advanced' },
                { name: 'Natural Language Processing', difficulty: 'Intermediate' }
            ]
        }
    },
    {
        id: 3,
        title: 'Blockchain Technology',
        description: 'Understand the decentralized ledger that powers cryptocurrencies.',
        image: aiImage,
        content: {
            introduction: 'Blockchain is a secure, decentralized ledger technology that underpins cryptocurrencies like Bitcoin.',
            keyPoints: [
                'Blockchain ensures transparency and immutability of data',
                'Smart contracts enable automated and trustless transactions',
                'Decentralized finance (DeFi) is revolutionizing traditional banking'
            ],
            relatedTopics: [
                { name: 'Cryptocurrency', difficulty: 'Beginner' },
                { name: 'Smart Contracts', difficulty: 'Intermediate' },
                { name: 'Decentralized Finance', difficulty: 'Advanced' }
            ]
        }
    },
    {
        id: 4,
        title: 'Space Exploration',
        description: 'Discover the wonders of the universe and humanitys quest to explore it.',
        image: aiImage,
        content: {
            introduction: 'Space exploration has expanded our understanding of the universe and our place within it.',
            keyPoints: [
                'Space telescopes like Hubble have revealed distant galaxies',
                'Mars exploration is paving the way for human colonization',
                'Private companies are driving innovation in space travel'
            ],
            relatedTopics: [
                { name: 'Astronomy', difficulty: 'Beginner' },
                { name: 'Mars Missions', difficulty: 'Intermediate' },
                { name: 'Space Tourism', difficulty: 'Advanced' }
            ]
        }
    },
    {
        id: 5,
        title: 'Renewable Energy',
        description: 'Learn about sustainable energy sources and their impact on the planet.',
        image: aiImage,
        content: {
            introduction: 'Renewable energy sources like solar and wind are key to combating climate change.',
            keyPoints: [
                'Solar panels convert sunlight into electricity',
                'Wind turbines harness wind energy for power generation',
                'Hydropower is one of the oldest renewable energy sources'
            ],
            relatedTopics: [
                { name: 'Solar Energy', difficulty: 'Beginner' },
                { name: 'Wind Energy', difficulty: 'Intermediate' },
                { name: 'Hydropower', difficulty: 'Advanced' }
            ]
        }
    },
    {
        id: 6,
        title: 'Genetic Engineering',
        description: 'Explore the science of modifying DNA to improve life.',
        image: aiImage,
        content: {
            introduction: 'Genetic engineering allows scientists to alter DNA to treat diseases and enhance organisms.',
            keyPoints: [
                'CRISPR is a revolutionary gene-editing tool',
                'Genetically modified organisms (GMOs) are used in agriculture',
                'Gene therapy holds promise for curing genetic disorders'
            ],
            relatedTopics: [
                { name: 'CRISPR Technology', difficulty: 'Advanced' },
                { name: 'Gene Therapy', difficulty: 'Intermediate' },
                { name: 'Biotechnology', difficulty: 'Beginner' }
            ]
        }
    },
    {
        id: 7,
        title: 'Cybersecurity',
        description: 'Understand the importance of protecting digital assets and data.',
        image: aiImage,
        content: {
            introduction: 'Cybersecurity involves safeguarding systems and data from cyber threats.',
            keyPoints: [
                'Encryption ensures secure communication',
                'Firewalls and antivirus software protect against malware',
                'Ethical hacking identifies vulnerabilities in systems'
            ],
            relatedTopics: [
                { name: 'Encryption', difficulty: 'Intermediate' },
                { name: 'Ethical Hacking', difficulty: 'Advanced' },
                { name: 'Network Security', difficulty: 'Beginner' }
            ]
        }
    },
    {
        id: 8,
        title: 'Virtual Reality',
        description: 'Step into immersive digital worlds with VR technology.',
        image: aiImage,
        content: {
            introduction: 'Virtual reality creates immersive experiences for gaming, education, and more.',
            keyPoints: [
                'VR headsets provide a 360-degree view of virtual environments',
                'Applications include gaming, training, and therapy',
                'Augmented reality (AR) blends virtual elements with the real world'
            ],
            relatedTopics: [
                { name: 'Augmented Reality', difficulty: 'Beginner' },
                { name: 'VR Gaming', difficulty: 'Intermediate' },
                { name: 'Immersive Technology', difficulty: 'Advanced' }
            ]
        }
    },
    {
        id: 9,
        title: 'Climate Change',
        description: 'Learn about the causes and solutions to global warming.',
        image: aiImage,
        content: {
            introduction: 'Climate change is a pressing global issue caused by greenhouse gas emissions.',
            keyPoints: [
                'Rising temperatures are melting polar ice caps',
                'Renewable energy can reduce carbon footprints',
                'International agreements aim to combat climate change'
            ],
            relatedTopics: [
                { name: 'Global Warming', difficulty: 'Beginner' },
                { name: 'Sustainability', difficulty: 'Intermediate' },
                { name: 'Environmental Science', difficulty: 'Advanced' }
            ]
        }
    }
];

const WheelContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 600, // Increased height for better visibility
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  perspective: 2000, // Increased perspective for better 3D effect
  overflow: 'visible',
}));

const Wheel = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: 500, // Increased size
  height: 500,
  transformStyle: 'preserve-3d',
  transform: 'rotateX(5deg)', // Slight tilt for better perspective
}));

const TopicCard = styled(motion.div)(({ theme, active }) => ({
  position: 'absolute',
  width: 280, // Increased card size
  height: 320,
  left: '50%',
  top: '50%',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
}));

const ExploreByCuriosity = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const wheelRef = React.useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        rotateRight();
      }
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  const rotateLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev - 1 + topics.length) % topics.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const rotateRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev + 1) % topics.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const calculateCardPosition = (index) => {
    const totalCards = topics.length;
    const angleStep = (2 * Math.PI) / totalCards;
    const radius = 300; // Increased radius for larger wheel
    const angle = angleStep * index - (currentIndex * angleStep);
    
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const rotateY = (index - currentIndex) * (360 / totalCards);
    
    return {
      x,
      z,
      rotateY,
      scale: Math.cos(angle) * 0.5 + 0.5, // Scale based on position
      opacity: Math.cos(angle) * 0.5 + 0.5, // Opacity based on position
    };
  };

  return (
    <Box sx={{ py: 8, px: 2, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Typography 
        variant="h4" 
        align="center" 
        fontWeight={600}
        sx={{ mb: 8 }}
      >
        Explore by <span style={{ color: theme.palette.primary.main }}>Curiosity</span>
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 4,
        mb: 6,
      }}>
        <IconButton 
          onClick={rotateLeft} 
          size="large"
          disabled={isAnimating}
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': { bgcolor: 'action.hover' },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <WheelContainer>
          <Wheel
            ref={wheelRef}
            animate={{ rotateY: currentIndex * -(360 / topics.length) }}
            transition={{ 
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            {topics.map((topic, index) => {
              const { x, z, rotateY, scale, opacity } = calculateCardPosition(index);
              const isActive = index === currentIndex;

              return (
                <TopicCard
                  key={topic.id}
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                      boxShadow: isActive ? theme.shadows[8] : theme.shadows[2],
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={topic.image}
                      alt={topic.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        {topic.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {topic.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </TopicCard>
              );
            })}
          </Wheel>
        </WheelContainer>

        <IconButton 
          onClick={rotateRight} 
          size="large"
          disabled={isAnimating}
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': { bgcolor: 'action.hover' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Detailed Content Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Box 
            sx={{ 
              mt: 8,
              maxWidth: 800,
              mx: 'auto',
              p: 3,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              {topics[currentIndex].title}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {topics[currentIndex].content.introduction}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Key Points
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {topics[currentIndex].content.keyPoints.map((point, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`
                  }}>
                    <Typography variant="body2">{point}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h6" gutterBottom>
              Related Topics
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {topics[currentIndex].content.relatedTopics.map((topic, idx) => (
                <Chip
                  key={idx}
                  label={topic.name}
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default ExploreByCuriosity;
