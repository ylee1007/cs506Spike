require('dotenv').config();
const mongoose = require('mongoose');

/*
mongoose.connect('mongodb+srv://yewon:218307Yw@cluster0-n8w62.mongodb.net/test?retryWrites=true&w=majority')
*/

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yewon:218307Yw@cluster0-n8w62.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
*/


mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

require('./models/Registration');
const app = require('./app');

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});