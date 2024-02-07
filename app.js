const express = require('express');
const { dirname } = require('path');
const sequelize=require('./connect')
const app = express();
const port = 3000;
app.use(express.static('public', { extensions: ['html'] }))

const userRoute=require('./routers/userRoute');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/user',userRoute)

app.get('/', (req, res) => {
 
    res.sendFile(__dirname + '/public/views/signup.html')
  })
  

app.listen(port, () => {
  sequelize.sync()
  console.log(`Server listening at http://localhost:${port}`);


});