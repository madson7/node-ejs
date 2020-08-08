const router = require('express').Router();
const faker = require('faker');
const passport = require('passport');


router.get('/', (req, res, next) => {
    res.render('pages/home')
});

router.get('/about', (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]

    res.render('pages/about', {
        usuarios: users
    });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
});

router.get('/signin', (req, res, next) => {
    res.render('pages/signin');
  });
  
  
  router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  }));
  
  router.get('/profile',isAuthenticated, (req, res, next) => {
    res.render('pages/profile');
  });
  
  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });
  
  
  function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
  }

module.exports = router;