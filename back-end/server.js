const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect("mongodb+srv://aleckzam:H6JiYeqhhQAPq5@cluster0.8oton.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

const itemSchema = new mongoose.Schema({
  title: Number,
  rating: Number,
});

const Item = mongoose.model('Rating', itemSchema);


//Create a rating for a movie
app.post('/api/items', async (req, res) => {
  console.log('inside post')
  const item = new Item({
    title: req.body.title,
    rating: req.body.rating,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


//Get all the ratings for a movie
app.get('/api/ratings', async (req, res) => {
  try {
    console.log('Getting items')
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));

