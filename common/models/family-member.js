module.exports = function(FamilyMember) {
  FamilyMember.validatesInclusionOf('gender', {in: ['male', 'female', 'transgender', 'other']});
};
