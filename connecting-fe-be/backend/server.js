import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Jay Shree Ram.');
});

app.get('/api/v1/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      content: 'Joke 1 content',
    },
    {
      id: 2,
      title: 'Joke 2',
      content: 'Joke 2 content',
    },
    {
      id: 3,
      title: 'Joke 3',
      content: 'Joke 3 content',
    },
    {
      id: 4,
      title: 'Joke 4',
      content: 'Joke 4 content',
    },
    {
      id: 5,
      title: 'Joke 5',
      content: 'Joke 5 content',
    },
    {
      id: 6,
      title: 'Joke 6',
      content: 'Joke 6 content',
    },
    {
      id: 7,
      title: 'Joke 7',
      content: 'Joke 7 content',
    },
    {
      id: 8,
      title: 'Joke 8',
      content: 'Joke 8 content',
    },
    {
      id: 9,
      title: 'Joke 9',
      content: 'Joke 9 content',
    },
    {
      id: 10,
      title: 'Joke 10',
      content: 'Joke 10 content',
    },
  ];

  res.send(jokes);
});

app.listen(PORT, () => console.log(`listenting at http://localhost:${PORT}`));
