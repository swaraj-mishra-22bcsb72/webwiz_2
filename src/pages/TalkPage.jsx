import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  Avatar,
  Divider,
  Breadcrumbs,
  Link
} from '@mui/material';

const TalkPage = () => {
  const { title } = useParams();

  const discussions = [
    {
      id: 1,
      user: "WikiEditor",
      avatar: "WE",
      date: "2024-03-15",
      content: "Should we add more references to the introduction section?",
      replies: [
        {
          user: "Contributor",
          avatar: "C",
          date: "2024-03-15",
          content: "Yes, I agree. I can help find reliable sources."
        }
      ]
    },
    // Add more discussions...
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ my: 2 }}>
          <Link href="/" color="inherit">Home</Link>
          <Link href={`/article/${title}`} color="inherit">{title}</Link>
          <Typography color="text.primary">Talk</Typography>
        </Breadcrumbs>

        <Typography variant="h4" gutterBottom>
          Talk: {title}
        </Typography>

        <Button variant="contained" sx={{ mb: 4 }}>
          Start New Discussion
        </Button>

        {discussions.map((discussion) => (
          <Paper key={discussion.id} sx={{ mb: 3, p: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Avatar>{discussion.avatar}</Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {discussion.user}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {discussion.date}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              {discussion.content}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {discussion.replies.map((reply, index) => (
              <Box key={index} sx={{ ml: 4, mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                  <Avatar sx={{ width: 32, height: 32 }}>{reply.avatar}</Avatar>
                  <Box>
                    <Typography variant="subtitle2">
                      {reply.user}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {reply.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ ml: 5 }}>
                  {reply.content}
                </Typography>
              </Box>
            ))}

            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Write a reply..."
                sx={{ mb: 1 }}
              />
              <Button variant="contained" size="small">
                Reply
              </Button>
            </Box>
          </Paper>
        ))}
      </Container>
    </motion.div>
  );
};

export default TalkPage; 