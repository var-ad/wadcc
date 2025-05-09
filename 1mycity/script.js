function showInfo(landmark) {
  const info = {
    "Shaniwar Wada": "Built in 1732, Shaniwar Wada was the seat of the Peshwas of the Maratha Empire.",
    "Aga Khan Palace": "Built in 1892, it is a landmark of national importance in Indian freedom history.",
    "Sinhagad Fort": "Famous for the battle of 1670, a trekking and heritage spot.",
    "Raja Dinkar Kelkar Museum": "Houses over 20,000 artifacts collected by Dr. Dinkar Kelkar."
  };

  const infoBox = document.getElementById('info-box');
  infoBox.textContent = info[landmark];
  infoBox.classList.remove('d-none');
}