function showAchievements(playerId) {
  const achievements = {
    nadal: "22 Grand Slam titles. King of Clay.",
    serena: "23 Grand Slam titles. Greatest female player.",
    federer: "20 Grand Slam titles. Style and dominance."
  };

  document.getElementById(playerId).innerText = achievements[playerId];
}
