const express = require('express');
const articles = require('./routes/articles');
const carousel = require('./routes/carousel');
const categories = require('./routes/categories');
const users = require('./routes/users');
const comments = require('./routes/comments');
const auth = require('./routes/auth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const passportSetUp = require('./passport-services/passport');
mongoose.set('useCreateIndex', true);
mongoose
  .connect("mongodb://localhost:27017/my-app", { useNewUrlParser: true,useFindAndModify:false})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Could Not Connect to MongoDB");
  });
  app.use(morgan('dev'));
  app.use(express.json([{limit: "50mb"}]));
  app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    next();
});
app.use(cors());
app.use(express.json());
app.use('/api/articles',articles);
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/api/carousel',carousel);
app.use('/api/categories',categories);
app.use('/api/comments',comments);


const port = process.env.PORT || 3900;
app.listen(port,()=>{console.log(`Listening on port ${port}`)})