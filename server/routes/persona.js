'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Persona, app, auth, database) {

  app.get('/persona/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/persona/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/persona/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/persona/example/render', function(req, res, next) {
    Persona.render('index', {
      package: 'persona'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
