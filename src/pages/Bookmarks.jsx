import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Paper,
  Box,
  Link,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const bookmarks = [
  {
    id: 1,
    title: "Introduction to Quantum Computing",
    link: "/article/quantum-computing",
    description: "A basic overview of quantum gates, qubits, and algorithms.",
    savedBy: "SwarajM",
    date: "2024-12-01",
  },
  {
    id: 2,
    title: "History of Artificial Intelligence",
    link: "/article/history-of-ai",
    description: "From rule-based systems to deep learning evolution.",
    savedBy: "TechSavvy",
    date: "2025-01-05",
  },
  {
    id: 3,
    title: "Modern JavaScript Features",
    link: "/article/js-es6-features",
    description: "Overview of ES6+ including arrow functions, promises, and modules.",
    savedBy: "DevGuru",
    date: "2025-02-10",
  },
];

const BookmarksPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Bookmarks
        </Typography>

        <Paper sx={{ mt: 3, p: 2 }}>
          <List>
            {bookmarks.map((bookmark, index) => (
              <Box key={bookmark.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <BookmarkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link href={bookmark.link} underline="hover" variant="h6">
                        {bookmark.title}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {bookmark.description}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                          Saved by {bookmark.savedBy} on {bookmark.date}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < bookmarks.length - 1 && <Divider variant="inset" component="li" />}
              </Box>
            ))}
          </List>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default BookmarksPage;
