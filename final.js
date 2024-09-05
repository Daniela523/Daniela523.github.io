const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('name1');
const name2 = urlParams.get('name2');

// Generate random love score between 0 and 100
const loveScore = Math.floor(Math.random() * 101);
document.getElementById('love-score').textContent = loveScore;

// Add corresponding emoji based on love score
const emojiElement = document.getElementById('emoji');
let emoji = '💔'; // Default emoji for low scores

if (loveScore > 80) {
  emoji = '💖'; // High love score
} else if (loveScore > 50) {
  emoji = '❤️'; // Moderate love score
} else if (loveScore > 30) {
  emoji = '💕'; // Lower score
}
emojiElement.textContent = emoji;

// Set the base URL for your site
const baseUrl = `https://Daniela523.github.io/`;

// Share on Facebook
document.getElementById('share-facebook').addEventListener('click', function() {
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}&quote=My%20Love%20Score%20with%20${name1}%20and%20${name2}%20is%20${loveScore}%25!%20Check%20yours%20at%20${baseUrl}`;
  window.open(shareURL, '_blank');
});

// Share on Instagram (manual guidance for Instagram Stories)
document.getElementById('share-instagram').addEventListener('click', function() {
  alert('You can share your score on Instagram Stories by taking a screenshot and uploading it.');
});
