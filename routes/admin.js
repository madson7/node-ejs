const router = require('express').Router();
const passport = require('passport');

router.get('/admin', (req, res, next) => {
  res.render('pages/admin/signin')
});

router.post('/admin', passport.authenticate('local-signinAdmin', {
  successRedirect: '/jacare/administrator',
  failureRedirect: '/jacare/admin',
  failureFlash: true
}));
  
  router.get('/administrator',isAuthenticated, (req, res, next) => {
    res.send('administrator');
  });
  
  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/jacare/admin'); // ainda precisa validar
  });

  router.get('/upadmin', isAuthenticated, (req, res, next) => {
    res.render('pages/admin/upadmin');
  });
  
  // Por segurança eu coloquei o "isAuthenticated" aqui
  router.post('/upadmin', isAuthenticated, passport.authenticate('local-signup', {
    successRedirect: '/jacare/upadmin',
    failureRedirect: '/jacare/upadmin',
    failureFlash: true
  }));
  
  function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }

module.exports = router;