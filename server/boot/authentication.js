module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();

  const User = server.models.user;
  const Role = server.models.Role;
  const RoleMapping = server.models.RoleMapping;

  const adminUsername = process.env.STRONGLOOP_ADMIN_USER;
  const adminPassword = process.env.STRONGLOOP_ADMIN_PASSWORD;

  if(!adminUsername || !adminPassword) {
    throw new Error('No admin user/password set. Use env STRONGLOOP_ADMIN_USER and STRONGLOOP_ADMIN_PASSWORD.');
  }

  User.create({
    email: adminUsername, password: adminPassword
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
