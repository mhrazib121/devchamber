const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

// MongoDB config 
const db = require('./config/keys').mongoURI;

// MongoDB connect
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

// use routes 
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);

app.get('/', (req, res) => {
    res.send("Hello World from the server site of Dev Chamber");
});

app.listen(port, () => console.log(`Server running on port ${port}`));