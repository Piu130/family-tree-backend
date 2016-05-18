module.exports = function(FamilyMemberInfo) {
  FamilyMemberInfo.validatesInclusionOf('gender', {
    in: ['male', 'female', 'transgender', 'other'],
    allowNull: true
  });
};
