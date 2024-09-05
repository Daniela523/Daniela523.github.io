let timeLeft = 30;
const countdownElement = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    
    // Close the tab after countdown finishes
    window.close();
  }
}, 1000);
