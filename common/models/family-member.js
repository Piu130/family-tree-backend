module.exports = function(FamilyMember) {
  FamilyMember.afterRemote('find', function(context, familyMembers, next) {
    familyMembers.map(function(familyMember) {

      if (!familyMember.public) {
        familyMember.firstNames = [familyMember.firstNames[0].charAt(0) + '*'];
        familyMember.lastNames = [familyMember.lastNames[0].charAt(0) + '*'];
      }

      return familyMember;
    });

    next();
  });
};
