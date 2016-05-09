module.exports = function(server) {

  var Container = server.models.container;
  var folderName = 'familyMemberImages';

  Container.getContainer(folderName, function(err) {
    if (err && err.status === 404) {
      Container.createContainer({
        name: folderName,
        allowedContentTypes:  ['image/jpeg']
      }, function() {});
    }
  });
};
