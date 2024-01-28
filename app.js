const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 3000;
app.use(express.static('public', { extensions: ['html'] }))
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/public/views/signup.html')
  })
  

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});