let timeLeft = 30;
const timerElement = document.getElementById('timer');

const countdown = setInterval(function() {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    window.close(); // Automatically closes the tab
    const urlParams = new URLSearchParams(window.location.search);
    const name1 = urlParams.get('name1');
    const name2 = urlParams.get('name2');
    window.opener.location.href = `final.html?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`;
  } else {
    timerElement.innerText = timeLeft;
    timeLeft--;
  }
}, 1000);
