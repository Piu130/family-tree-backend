module.exports = function(FamilyMember) {

  function reduceNamesIfNotPublic(familyMember) {
    if (!familyMember.public && familyMember.firstNames && familyMember.lastNames) {
      familyMember.firstNames = [familyMember.firstNames[0].charAt(0) + '*'];
      familyMember.lastNames = [familyMember.lastNames[0].charAt(0) + '*'];
    }

    return familyMember;
  }

  FamilyMember.afterRemote('**', function(ctx, modelInstance, next) {
    if (ctx.result) {
      if (Array.isArray(ctx.result)) {
        var answer = ctx.result.map(reduceNamesIfNotPublic);
      } else {
        var answer = reduceNamesIfNotPublic(ctx.result);
      }
      ctx.result = answer;
    }
    next();
  });
};
