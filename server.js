const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;

const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const users = require('./routes/api/users');
const profiles = require('./routes/api/profile');
const posts = require('./routes/api/posts');

mongoose
    .connect(db)
    .then(() => console.log('Connected Successfully'))
    .catch(err => console.dir(err));

app.use('/api/users', users);
app.use('/api/profile', profiles);
app.use('/api/posts', posts);

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport.js')(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));