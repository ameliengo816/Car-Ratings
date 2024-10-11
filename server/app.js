const express = require('express');
const items = require('./routes/api/items');
const hospitals = require('./routes/api/hospitals');
const users = require('./routes/api/users');
const auth = require('./middleware/auth');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/items', items);
app.use('/api/hospitals', hospitals);
app.use('/api/users', users);

const conn_str = 'mongodb+srv://thingo1002:GdJ0oI6fyczWOD8u@cluster0.30zgxcw.mongodb.net/?retryWrites=true&w=majority';  //PUT MONGODB CONNECTION STRING HERE!!!!!!
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Erorr in DB Connection ${err}')
})




