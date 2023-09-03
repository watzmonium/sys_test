const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'basic_crud')));
app.get('/', (req, res) => {
  console.log('request logged')
  res.sendFile('public/index.html');
  console.log('request logged')
});

app.get('/app', (req, res) => {
  res.sendFile('basic_crud/index.html')
})
app.listen(PORT, () => console.log(`server running on port ${PORT}`));