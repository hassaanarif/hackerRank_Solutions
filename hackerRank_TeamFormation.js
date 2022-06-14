function countTeams(skills, minPlayers, minLevel, maxLevel) {
  let requiredSkills = new Set();
  let count = 0;

  for (let skill of skills) {
    if (skill >= minLevel && skill <= maxLevel) {
      requiredSkills.add(skill);
    }
  }
  let requiredSkillsLength = requiredSkills.size;

  let nFactorial = factorial(requiredSkillsLength);

  // Comibation
  for (let i = minPlayers; i <= requiredSkillsLength; i++) {
    let rFactorial = factorial(i);
    let nMinusRFactorial = factorial(requiredSkillsLength - i);
    count += nFactorial / (rFactorial * nMinusRFactorial);
  }

  return count;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(countTeams([12, 4, 6, 13, 5, 10], 3, 4, 10));
