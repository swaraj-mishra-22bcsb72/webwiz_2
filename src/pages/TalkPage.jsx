import { useState } from 'react';
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
  Link,
} from '@mui/material';

const TalkPage = () => {
  const title = "Forum";
  const [discussions, setDiscussions] = useState([
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
          content: "Yes, I agree. I can help find reliable sources.",
        },
      ],
    },
    {
      id: 2,
      user: "AIExpert42",
      avatar: "A",
      date: "2024-03-18",
      content: "Is the definition up to date with the latest research papers?",
      replies: [
        {
          user: "TechFan",
          avatar: "T",
          date: "2024-03-19",
          content: "It could use a mention of GPT-4 and recent developments.",
        },
      ],
    },
  ]);

  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [newContent, setNewContent] = useState('');

  const handleAddDiscussion = () => {
    if (!newContent.trim()) return;

    const newDiscussion = {
      id: discussions.length + 1,
      user: "NewUser",
      avatar: "N",
      date: new Date().toISOString().split('T')[0],
      content: newContent,
      replies: [],
    };

    setDiscussions([newDiscussion, ...discussions]);
    setNewContent('');
    setShowNewDiscussion(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ my: 2 }}>
          <Link href="/" color="inherit">Home</Link>
          <Link href={`/article/${title.replace(/\s+/g, '-').toLowerCase()}`} color="inherit">{title}</Link>
          <Typography color="text.primary">Talk</Typography>
        </Breadcrumbs>

        <Typography variant="h4" gutterBottom>Talk: {title}</Typography>

        {/* Start Discussion Button */}
        <Button variant="contained" sx={{ mb: 2 }} onClick={() => setShowNewDiscussion(prev => !prev)}>
          {showNewDiscussion ? "Cancel" : "Start New Discussion"}
        </Button>

        {/* New Discussion Form */}
        {showNewDiscussion && (
          <Paper sx={{ mb: 4, p: 3 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Enter your discussion topic..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleAddDiscussion}>Post Discussion</Button>
          </Paper>
        )}

        {/* Discussions List */}
        {discussions.map((discussion) => (
          <Paper key={discussion.id} sx={{ mb: 3, p: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Avatar>{discussion.avatar}</Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">{discussion.user}</Typography>
                <Typography variant="body2" color="text.secondary">{discussion.date}</Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>{discussion.content}</Typography>
            <Divider sx={{ my: 2 }} />

            {discussion.replies.map((reply, index) => (
              <Box key={index} sx={{ ml: 4, mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                  <Avatar sx={{ width: 32, height: 32 }}>{reply.avatar}</Avatar>
                  <Box>
                    <Typography variant="subtitle2">{reply.user}</Typography>
                    <Typography variant="body2" color="text.secondary">{reply.date}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ ml: 5 }}>{reply.content}</Typography>
              </Box>
            ))}

            <Box sx={{ mt: 3 }}>
              <TextField fullWidth multiline rows={2} placeholder="Write a reply..." sx={{ mb: 1 }} />
              <Button variant="contained" size="small">Reply</Button>
            </Box>
          </Paper>
        ))}
      </Container>
    </motion.div>
  );
};

export default TalkPage;
