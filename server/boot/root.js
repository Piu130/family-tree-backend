module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  var User = server.models.user;
  var Role = server.models.Role;
  var RoleMapping = server.models.RoleMapping;

  User.create({
    email: 'admin@admin.admin', password: 'admin'
  }, function(err, user) {

    Role.create({
      name: 'admin'
    }, function(err, role) {
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      }, function(err, principal) {});
    });
  });

};
