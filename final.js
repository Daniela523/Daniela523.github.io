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

// Share via WhatsApp with custom message
document.getElementById('share-whatsapp').addEventListener('click', function() {
  const whatsappMessage = `My love score with ${name1} and ${name2} is ${loveScore}%! Check yours at https://Daniela523.github.io`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');
});

// Share on Facebook with a predefined link
document.getElementById('share-facebook').addEventListener('click', function() {
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=https://Daniela523.github.io&quote=My%20Love%20Score%20with%20${name1}%20and%20${name2}%20is%20${loveScore}%25!%20Check%20yours%20at%20https://Daniela523.github.io`;
  window.open(shareURL, '_blank');
});

// Capture the score section for Instagram sharing
document.getElementById('share-instagram').addEventListener('click', function() {
  html2canvas(document.querySelector(".final-result")).then(canvas => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'love-score.png';
    link.href = image;
    link.click(); // Trigger the download
    alert("Share the downloaded image on Instagram.");
  });
});
