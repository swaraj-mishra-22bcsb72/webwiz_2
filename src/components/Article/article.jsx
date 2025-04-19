import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  LinearProgress,
  Breadcrumbs,
  IconButton,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  CardMedia,
} from '@mui/material';
import {
  Edit as EditIcon,
  History as HistoryIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';
import aiImage from '../../assets/ai.webp';

const Article = () => {
  const { title } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [tableOfContents, setTableOfContents] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Mock article data - replace with actual API call
  const articleData = {
    title: decodeURIComponent(title),
    lastModified: "March 15, 2024",
    contributors: 45,
    category: "Science",
    image: aiImage,
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2 id="history">History</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2 id="modern-developments">Modern Developments</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2 id="impact">Impact</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
    references: [
      { id: 1, text: "Reference 1 - Academic Journal (2023)" },
      { id: 2, text: "Reference 2 - Research Paper (2024)" },
    ]
  };

  useEffect(() => {
    // Parse content for table of contents
    const parser = new DOMParser();
    const doc = parser.parseFromString(articleData.content, 'text/html');
    const headings = doc.querySelectorAll('h2');
    const toc = Array.from(headings).map(heading => ({
      id: heading.id,
      text: heading.textContent
    }));
    setTableOfContents(toc);

    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = articleData.content.trim().split(/\s+/).length;
    setReadingTime(Math.ceil(wordCount / wordsPerMinute));

    // Handle scroll progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleData.content]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Reading Progress Bar */}
      <Box sx={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 1000 }}>
        <LinearProgress 
          variant="determinate" 
          value={readingProgress} 
          sx={{ 
            height: 3,
            backgroundColor: 'transparent',
          }} 
        />
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
          <Typography color="text.primary">{articleData.title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={3}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 3 }}>
              {/* Add the hero image */}
              <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={articleData.image}
                  alt={articleData.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Article Header */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" gutterBottom>
                  {articleData.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip 
                    label={`${readingTime} min read`} 
                    size="small" 
                    color="primary" 
                    variant="outlined" 
                  />
                  <Chip 
                    label={articleData.category} 
                    size="small" 
                  />
                  <Chip 
                    label={`${articleData.contributors} contributors`} 
                    size="small" 
                    variant="outlined" 
                  />
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Button
                    startIcon={<EditIcon />}
                    variant="outlined"
                    size="small"
                    component={Link}
                    to={`/edit/${title}`}
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<HistoryIcon />}
                    variant="outlined"
                    size="small"
                    component={Link}
                    to={`/history/${title}`}
                  >
                    History
                  </Button>
                  <Button
                    startIcon={<CommentIcon />}
                    variant="outlined"
                    size="small"
                    component={Link}
                    to={`/talk/${title}`}
                  >
                    Talk
                  </Button>
                  <IconButton
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    size="small"
                  >
                    {isBookmarked ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Article Content */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="article-content"
                dangerouslySetInnerHTML={{ __html: articleData.content }}
              />

              {/* References */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  References
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List dense>
                  {articleData.references.map((ref) => (
                    <ListItem key={ref.id}>
                      <ListItemText primary={ref.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ position: 'sticky', top: 80 }}>
              {/* Add a thumbnail version of the image in the sidebar */}
              <CardMedia
                component="img"
                image={articleData.image}
                alt={articleData.title}
                sx={{
                  height: 160,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                {/* Table of Contents */}
                <Typography variant="h6" gutterBottom>
                  Contents
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List dense>
                  {tableOfContents.map((item, index) => (
                    <ListItem 
                      key={item.id}
                      button 
                      component="a"
                      href={`#${item.id}`}
                      sx={{ 
                        pl: 2,
                        borderLeft: '2px solid transparent',
                        '&:hover': {
                          borderLeftColor: 'primary.main',
                        }
                      }}
                    >
                      <ListItemText 
                        primary={`${index + 1}. ${item.text}`}
                        primaryTypographyProps={{
                          variant: 'body2',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                {/* Article Info */}
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Last modified: {articleData.lastModified}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Article; 