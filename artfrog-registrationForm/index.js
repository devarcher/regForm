const express = require("express");
const bodyParser = require('body-parser')
const uuid = require('uuid');

const { classmates } = require('./classmates');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/api/classmates', (req, res) => {
  res.json(classmates);
})
app.post('/api/register', (req, res) => {
  // hard coded example for successful class registration
  const newClassmate = {
    id: uuid.v4(),
    name: req.body.name,
    class: req.body.class,
    age: req.body.age
  };
  classmates.push(newClassmate);
  res.send('success');

  // need to take form submission and inject data into mySQL database.
  // validate and sanitize user input with { express-validator } npm package
})
app.post('/api/requestclass', (req, res) => {
  // class requested
  // respond with something like, "thanks for requesting a class. We will reach out to you shortly"
})
app.post('/api/volunteer', (req, res) => {
  // request to be a volunteer
  // respond with something like, "thanks for volunteering. We will reach out to you shortly"
})
app.post('/api/donate', (req, res) => {
  // donate via { Stripe / Paypal }
  // use axios for communicating with remote API
})
app.post('/api/contact', (req, res) => {
  // contact us
  // Heike said she didn't want a billion emails in her inbox, but maybe for now we just use nodemailer to send emails.
})
app.post('api/event_signup', (req, res) => {
  // sign up for event via { Eventbrite }
  // use axios for communicating with remote API
})
app.post('api/add_teacher', (req, res) => {
  // add teacher to teacher list
  // { name, image, bio, etc }
})
app.post('api/add_class', (req, res) => {
  // add class to class list
  // { className, description, etc }
})
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
