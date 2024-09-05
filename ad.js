let timeLeft = 30;
const countdownElement = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;
  
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    // Redirect to the ad link
    window.location.href = "https://www.cpmrevenuegate.com/dqpg3cak2?key=b3908da304a081bf9c86f27c84e9e0ee";
  }
}, 1000);
