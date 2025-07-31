import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/production-stats', (req, res) => {
  res.json({ message: 'Production stats endpoint' });
});

app.get('/api/production-programs/date-range', (req, res) => {
  res.json({ message: 'Programs in date range endpoint' });
});

app.post('/api/production-programs', (req, res) => {
  res.json({ message: 'Program created' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));