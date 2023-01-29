const mongoose = require('mongoose');
require('dotenv').config()
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const mongoURI = process.env.MONGO_URI

// Connection to the database "recipe-app"
mongoose
  .connect(mongoURI, {useNewUrlParser : true})
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
   Recipe.create({
    title: 'HotDog',
    ingredients: ['Sausage', 'Hod Dog Bun', 'Ketchup', 'Mustard', 'Relish (optional'],
    instructions: '1. Cook your sausage by steaming, or boiling it, whatever. 2. Open you bun. 3. Put you sausage in the bun. 4. Put Mustard, ketchup, and relish if you like it. 5. Eat ',
    cuisine: "American",
    
});
    .then  console.log(`Recipe "${recipe.title}" has been added to the database.`)
})
.then Recipe.insertMany(data, (error, recipe) => {
  if (error) {
      console.log(error);
  } else {
      recipe.forEach(recipe => {
          console.log(`Recipe "${recipe.title}" has been added to the database.`);
      });
  }
});
.then Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, (error, recipe) => {
  if (error) {
      console.log(error);
  } else {
      console.log(`The duration of recipe "${recipe.title}" has been updated to 100.`);
  }
});
.then Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, (error, recipe) => {
  if (error) {
      console.log(error);
  } else {
      console.log(`The duration of recipe "${recipe.title}" has been updated to 100.`);
  }
});
.then Recipe.deleteOne({ title: 'Carrot Cake' }, (error) => {
  if (error) {
      console.log(error);
  } else {
      console.log('The Carrot Cake recipe has been removed from the database.');
  }
});

.catch(error => {
  console.error('Error connecting to the database', error);
});
