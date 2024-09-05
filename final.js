const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('name1');
const name2 = urlParams.get('name2');

document.getElementById('name1').textContent = name1;
document.getElementById('name2').textContent = name2;

// Generate a random love score between 50 and 100
const loveScore = Math.floor(Math.random() * 50) + 50;
document.getElementById('love-score').textContent = loveScore;

// Share on Facebook
document.getElementById('share-facebook').addEventListener('click', function() {
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=https://username.github.io`;
  window.open(shareURL, '_blank');
});

// Share on Instagram
document.getElementById('share-instagram').addEventListener('click', function() {
  alert('You can share this manually on Instagram Stories by uploading your result.');
});
