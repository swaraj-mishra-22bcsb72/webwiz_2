import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  IconButton,
  Button
} from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Timer, Group, Category, HistoryEdu } from '@mui/icons-material'

import aiImage from '../assets/ai.webp'
import climateImage from '../assets/climate.avif'
import quantumImage from '../assets/quantum.webp'
import hisImage from '../assets/his.avif'
import spaceImage from '../assets/space.avif'
import medImage from '../assets/med.avif'
import { image } from 'framer-motion/client'

// ✅ Hardcoded Data
const trendingTopics = [
  {
    id: 1,
    title: 'Quantum Computing',
    description:
      'Exploring the future of computing technology and its potential applications in various fields.',
    content: `
        <h2 id="introduction">Introduction</h2>
        <p>Quantum computing is a rapidly growing field that uses principles of quantum mechanics to perform computations that would be impossible or take an impractical amount of time on classical computers.</p>
        <h2 id="applications">Applications</h2>
        <p>Potential applications include breaking cryptographic codes, simulating molecular structures for drug discovery, and solving complex optimization problems.</p>
        <h2 id="challenges">Challenges</h2>
        <p>Despite the promise, quantum computers face major challenges such as error correction, scalability, and maintaining quantum coherence.</p>
      `,
    image: quantumImage,
    category: 'Science',
    readTime: '5 min read',
    contributors: 3,
    lastModified: '2025-04-10',
    references: [
      { id: 1, text: 'Wikipedia: Quantum Computing' },
      { id: 2, text: 'IBM Research: Quantum' }
    ]
  },
  {
    id: 2,
    title: 'Climate Change',
    description:
      'Understanding global environmental shifts and their impact on ecosystems and human societies.',
    content: `
        <h2 id="overview">Overview</h2>
        <p>Climate change refers to long-term shifts in temperatures and weather patterns, mainly caused by human activities such as burning fossil fuels.</p>
        <h2 id="impacts">Impacts</h2>
        <p>Effects include rising sea levels, melting glaciers, more intense and frequent extreme weather events, and biodiversity loss.</p>
        <h2 id="solutions">Solutions</h2>
        <p>Combating climate change requires reducing carbon emissions, transitioning to renewable energy, and implementing global sustainability policies.</p>
      `,
    image: climateImage,
    category: 'Environment',
    readTime: '7 min read',
    contributors: 5,
    lastModified: '2025-04-09',
    references: [
      { id: 1, text: 'NASA: Climate Change Evidence' },
      { id: 2, text: 'IPCC Reports' }
    ]
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    description:
      'The evolution of AI and its transformative effects on modern technology and society.',
    content: `
        <h2 id="history">History</h2>
        <p>Artificial Intelligence (AI) has evolved from symbolic systems and rule-based logic in the mid-20th century to modern machine learning and deep learning methods.</p>
        <h2 id="current-trends">Current Trends</h2>
        <p>Modern AI includes natural language processing, computer vision, and reinforcement learning, with applications in healthcare, finance, and autonomous systems.</p>
        <h2 id="ethics">Ethical Considerations</h2>
        <p>There are growing concerns around job displacement, algorithmic bias, and the need for AI governance and transparency.</p>
      `,
    image: aiImage,
    category: 'Technology',
    readTime: '6 min read',
    contributors: 4,
    lastModified: '2025-04-08',
    references: [
      { id: 1, text: 'OpenAI Blog' },
      { id: 2, text: 'Stanford AI Index Report' }
    ]
  }
]

const newsItems = [
  {
    id: 1,
    title: 'Major Scientific Discovery',
    image: medImage,
    description:
      'Researchers make breakthrough in renewable energy technology, potentially revolutionizing clean power generation.',
    date: '2024-03-15',
    category: 'Science'
  },
  {
    id: 2,
    title: 'Historical Artifact Found',
    image: hisImage,
    description:
      'Ancient manuscript discovered in remote location sheds new light on early human civilization.',
    date: '2024-03-14',
    category: 'History'
  },
  {
    id: 3,
    title: 'Space Exploration Milestone',
    image: spaceImage,
    description:
      "New mission to Mars reveals unprecedented data about the planet's geological history.",
    date: '2024-03-13',
    category: 'Space'
  }
]

const onThisDay = [
  {
    id: 1,
    year: '1879',
    event: 'Albert Einstein was born in Ulm, Germany',
    category: 'Science'
  },
  {
    id: 2,
    year: '1965',
    event: 'First spacewalk conducted by Soviet cosmonaut Alexei Leonov',
    category: 'Space'
  },
  {
    id: 3,
    year: '1985',
    event: 'First domain name (symbolics.com) was registered',
    category: 'Technology'
  }
]

const categories = [
  {
    id: 1,
    name: 'Science',
    icon: 'science',
    description: 'Explore the latest scientific discoveries and research'
  },
  {
    id: 2,
    name: 'History',
    icon: 'history',
    description: 'Journey through time and explore historical events'
  },
  {
    id: 3,
    name: 'Technology',
    icon: 'computer',
    description: 'Stay updated with the latest tech innovations'
  },
  {
    id: 4,
    name: 'Arts',
    icon: 'palette',
    description: 'Discover the world of art and creativity'
  }
]

// ✅ UI Components
const Section = ({ title, data, type }) => {
    const navigate = useNavigate();
  
    const handleCardClick = (e, article) => {
      e.stopPropagation();
      if (type === 'category') {
        navigate(`/category/${article.name.toLowerCase()}`);
      } else if (type === 'event') {
        // You might want a specific route for history events
        navigate(`/event/${article.year}-${article.event.replace(/\s+/g, '-').toLowerCase()}`);
      } else {
        navigate(`/article/${article.title.replace(/\s+/g, '-').toLowerCase()}`);
      }
    };
  
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
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            '&::-webkit-scrollbar': {
              display: 'none', // Chrome/Safari
            },
          }}
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((item) => {
            // 1. 🟢 Render articles and news
            if (type === 'article' || type === 'news') {
              return (
                <Card
                  key={item.id}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    cursor: 'pointer',
                    borderRadius: 2,
                    maxWidth: 500,
                    height: 220,
                    mx: 'auto',
                    transition: 'all 0.2s ease-in-out',
                    flexShrink: 0,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[8],
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', width: '100%', position: 'relative' }}>
                    {/* Image Section */}
                    <Box sx={{ width: '40%' }}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{ height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
  
                    {/* Content Section */}
                    <Box sx={{ width: '60%' }}>
                      <CardContent sx={{ height: '100%', p: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {item.title}
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
                          {item.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 'auto',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Chip label={item.category} size="small" color="primary" />
                            {item.readTime && (
                              <Chip
                                icon={<Timer sx={{ fontSize: 16 }} />}
                                label={item.readTime}
                                size="small"
                                variant="outlined"
                              />
                            )}
                          </Box>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </Card>
              );
            }
  
            // 2. 🟡 Render historical events (onThisDay)
            if (type === 'event') {
              return (
                <Card
                  key={item.id}
                  onClick={(e) => handleCardClick(e, item)}
                  sx={{
                    cursor: 'pointer',
                    minWidth: 300,
                    maxWidth: 350,
                    p: 2,
                    flexShrink: 0,
                    borderRadius: 2,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[6],
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.year}
                    </Typography>
                    <Typography variant="body2" sx={{ my: 1 }}>
                      {item.event}
                    </Typography>
                    <Chip icon={<HistoryEdu />} label={item.category} size="small" color="secondary" />
                  </CardContent>
                </Card>
              );
            }
  
            // 3. 🔵 Render categories
            if (type === 'category') {
              return (
                <Card
                  key={item.id}
                  onClick={(e) => handleCardClick(e, item)}
                  sx={{
                    cursor: 'pointer',
                    minWidth: 300,
                    maxWidth: 350,
                    p: 2,
                    flexShrink: 0,
                    borderRadius: 2,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[6],
                    },
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Category />
                      <Typography variant="h6" fontWeight="bold">
                        {item.name}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            }
  
            return null; // fallback
          })}
        </Box>
      </Box>
    );
  };
  

// ✅ Main Component
const ListAllArticles = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 4,
        maxWidth: '100%',
        overflowX: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      <Typography variant='h4' sx={{ mb: 4 }}>
        Explore All Knowledge
      </Typography>

      <Section title='Trending Topics' data={trendingTopics} type='article' />
      <Section title='Latest News' data={newsItems} type='news' />
      <Section title='On This Day in History' data={onThisDay} type='event' />
      <Section title='Browse by Categories' data={categories} type='category' />
    </Box>
  )
}

export default ListAllArticles
