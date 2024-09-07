// Generate a random love score between 0 and 100
const loveScore = Math.floor(Math.random() * 101);
const loveScoreText = document.getElementById('loveScore');
loveScoreText.textContent = loveScore;

// Function to generate an image from canvas
function generateImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = 600;
  canvas.height = 400;

  // Set background color and text for the image
  ctx.fillStyle = '#ffafbd'; // Pink gradient color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '30px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Your Love Score', 200, 150);

  ctx.font = '50px Arial';
  ctx.fillStyle = '#fff';
  ctx.fillText(`${loveScore}`, 250, 220);

  return canvas.toDataURL("image/png");
}

// Download the generated image
document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = generateImage();
  link.download = 'love_score.png';
  link.click();
});

// Share on Facebook
document.getElementById('facebookShareBtn').addEventListener('click', () => {
  const image = generateImage();
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}`;
  window.open(fbUrl, '_blank');
});

// Copy Link Functionality
document.getElementById('copyLinkBtn').addEventListener('click', () => {
  const copyText = `My love score is ${loveScore}. Check yours here: https://daniela523.github.io`;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Link copied to clipboard!");
  });
});
