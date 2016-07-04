module.exports = function(server) {

  var Container = server.models.container;
  var folderName = 'family_member_images';

  Container.getContainer(folderName, function(err) {

    if (err && err.status === 404) {
      Container.createContainer({
        name: folderName,
        allowedContentTypes:  ['image/jpeg']
      }, function() {});
    }
  });
};
