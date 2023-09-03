const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));