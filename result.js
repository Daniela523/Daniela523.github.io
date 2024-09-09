document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('yourName');
  const partnerName = localStorage.getItem('partnerName');

  const score = Math.floor(Math.random() * 101);

  document.getElementById('userName').textContent = userName;
  document.getElementById('score').textContent = score + '%';

  const emojiElement = document.getElementById('emoji');
  if (score >= 80) {
    emojiElement.innerHTML = '<img src="images/emoji-80-100.png" alt="emoji">';
  } else if (score >= 60) {
    emojiElement.innerHTML = '<img src="images/emoji-60-79.png" alt="emoji">';
  } else if (score >= 40) {
    emojiElement.innerHTML = '<img src="images/emoji-40-59.png" alt="emoji">';
  } else if (score >= 20) {
    emojiElement.innerHTML = '<img src="images/emoji-20-39.png" alt="emoji">';
  } else {
    emojiElement.innerHTML = '<img src="images/emoji-0-19.png" alt="emoji">';
  }
});
