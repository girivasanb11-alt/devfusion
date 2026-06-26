// src/services/matchingService.js
export function computeMatches(currentUserDoc, allUsers) {
  if (!currentUserDoc || !currentUserDoc.skillsWanted) return [];

  const wantedSkills = currentUserDoc.skillsWanted.map((s) => s.toLowerCase());

  const scoredUsers = allUsers.map((user) => {
    let score = 0;
    const matchingSkills = [];

    if (user.skillsOffered && Array.isArray(user.skillsOffered)) {
      user.skillsOffered.forEach((offer) => {
        if (wantedSkills.includes(offer.skill.toLowerCase())) {
          score += 2;
          if (offer.proficiency === 'Expert') {
            score += 1;
          }
          matchingSkills.push(offer);
        }
      });
    }

    return { ...user, score, matchingSkills };
  });

  return scoredUsers
    .filter((u) => u.score > 0)
    .sort((a, b) => b.score - a.score);
}
