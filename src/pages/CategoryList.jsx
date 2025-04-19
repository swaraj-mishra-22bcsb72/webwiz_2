import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Breadcrumbs,
  Link,
  Chip
} from '@mui/material';

const CategoryList = () => {
  const { name } = useParams();

  const categoryArticles = [
    {
      id: 1,
      title: "Article 1",
      description: "Brief description of article 1",
      lastEdited: "2 days ago",
      contributors: 15
    },
    // Add more articles...
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ my: 2 }}>
          <Link href="/" color="inherit">Home</Link>
          <Link href="/categories" color="inherit">Categories</Link>
          <Typography color="text.primary">{name}</Typography>
        </Breadcrumbs>

        <Typography variant="h3" gutterBottom>
          Category: {name}
        </Typography>

        <Grid container spacing={3}>
          {categoryArticles.map((article) => (
            <Grid item xs={12} key={article.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {article.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Chip 
                      label={`Last edited ${article.lastEdited}`} 
                      size="small" 
                    />
                    <Chip 
                      label={`${article.contributors} contributors`} 
                      size="small" 
                      variant="outlined" 
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default CategoryList; 