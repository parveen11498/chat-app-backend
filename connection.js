const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://mern-chat-app:mernchatapp@cluster0.ed9rjmz.mongodb.net/mern-chat-app?retryWrites=true&w=majority', ()=> {
  console.log('connected to mongodb')
})