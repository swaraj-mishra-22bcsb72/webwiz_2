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
  const title = "Sample Article"; // Hardcoded title

  const revisions = [
    {
      id: 1,
      date: "2024-03-15",
      user: "User123",
      comment: "Updated references",
      size: "+245 bytes"
    },
    {
      id: 2,
      date: "2024-03-10",
      user: "Editor456",
      comment: "Fixed typos in the introduction",
      size: "+120 bytes"
    },
    {
      id: 3,
      date: "2024-03-05",
      user: "Admin789",
      comment: "Reverted to a previous version",
      size: "-300 bytes"
    },
    {
      id: 4,
      date: "2024-02-28",
      user: "Contributor001",
      comment: "Added new section on history",
      size: "+500 bytes"
    },
    {
      id: 5,
      date: "2024-02-20",
      user: "User123",
      comment: "Improved formatting",
      size: "+50 bytes"
    }
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
