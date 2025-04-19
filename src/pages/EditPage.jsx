import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Alert,
  Breadcrumbs,
  Link
} from '@mui/material';

const EditPage = () => {
  const { title } = useParams();

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
          <Typography color="text.primary">Edit</Typography>
        </Breadcrumbs>

        <Typography variant="h4" gutterBottom>
          Editing: {title}
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          Please follow Wikipedia's editing guidelines when making changes.
        </Alert>

        <Paper sx={{ p: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={20}
            defaultValue="Article content here..."
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
            <Button variant="outlined">
              Preview
            </Button>
            <Button variant="outlined" color="error">
              Cancel
            </Button>
          </Box>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default EditPage; 