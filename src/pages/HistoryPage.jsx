import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  Button
} from '@mui/material';

const HistoryPage = () => {
  const { title } = useParams();

  const revisions = [
    {
      id: 1,
      date: "2024-03-15",
      user: "User123",
      comment: "Updated references",
      size: "+245 bytes"
    },
    // Add more revision history...
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
          <Typography color="text.primary">History</Typography>
        </Breadcrumbs>

        <Typography variant="h4" gutterBottom>
          Revision History: {title}
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {revisions.map((revision) => (
                <TableRow key={revision.id}>
                  <TableCell>{revision.date}</TableCell>
                  <TableCell>{revision.user}</TableCell>
                  <TableCell>{revision.comment}</TableCell>
                  <TableCell>{revision.size}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Restore</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </motion.div>
  );
};

export default HistoryPage; 