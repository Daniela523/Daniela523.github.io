let timeLeft = 30;
const countdownElement = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;
  
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    window.close(); // Close the ad tab
  }
}, 1000);
