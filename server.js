'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan'); //for our logging to the console?

// We need to "require" the files whose content we reference in this file.
const exercisesP1 = require('./__workshop/exercisesP1');

const PORT = 8000;

const q6 = (req, res) => res.render('pages/question6');
const q7 = (req, res) => res.render('pages/question7');
const q8 = (req, res) => res.render('pages/question8');
const q9 = (req, res) => res.render('pages/question9');
const q10 = (req, res) => res.render('pages/question10');
const homepage = (req, res) => res.render("pages/homepage");
const fourOhfour = (req, res) => {
    res.status(404);
    res.render("pages/fourOhfour");
}


express()
    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan('tiny'))
    // Any requests for static files will go into the public folder
    .use(express.static('public'))
    // We are using ejs as our templating engine. see https://ejs.co/  (this dependancy is a template we could have used "jade?". THis will sticth together html and JS but CSS and images are stored in the public folder )
    .set('view engine', 'ejs') //anything inside views is an EJS template

    // endpoints
    .get('/question1', exercisesP1.q1)
    .get('/question2', exercisesP1.q2)
    .get('/question3', exercisesP1.q3)
    .get('/question4', exercisesP1.q4)
    .get('/question5', exercisesP1.q5)
    .get('/question6', q6)
    .get('/question7', q7)
    .get('/question8', q8)
    .get('/question9', q9)
    .get('/question10', q10)
    .get('/homepage', homepage  )
    
    
    
    // this serves up the homepage if someone calls it
    .get('/', (req, res) => {
        res.send('This is the homepage... it\'s empty :(');
    })

    // this is our catch all endpoint. If a user navigates to any endpoint that is not
    // defined above, they get to see our 404 page. WE hAVE TO SET THIS// anything in the 200 is success, 300s is redirect 400s not available and 500s is server error
    .get('*', fourOhfour)

    // Node spins up our server and sets it to listen on the PORT we defined above.
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));