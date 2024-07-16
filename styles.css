function checkLoveMeter() {
  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;

  if (!yourName || !partnerName) {
    alert('Please enter both names.');
    return;
  }

  const loveScore = Math.floor(Math.random() * 101);

  alert('Please allow pop-ups in the next window. We can easily show your result if you allow it. If you don\'t allow, we are not able to show the result because the pop-up will be blocked.');
  document.getElementById('adMessage').style.display = 'block';

  setTimeout(() => {
    const adWindow = window.open('https://your-ad-link.com', '_blank');
    if (adWindow) {
      setTimeout(() => {
        const resultWindow = window.open('', '_blank');
        resultWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Love Meter Result</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <style>
              body {
                background: linear-gradient(to right, #ff758c, #ff7eb3);
                font-family: Arial, sans-serif;
                text-align: center;
                color: #fff;
              }
              .container {
                margin-top: 50px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 15px;
                padding: 30px;
                display: inline-block;
              }
              .heart {
                font-size: 50px;
                color: red;
              }
              .share-buttons button {
                background: #fff;
                color: #ff758c;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin: 5px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Love Meter Result</h1>
              <div class="heart">❤️</div>
              <p>Love compatibility between ${yourName} and ${partnerName} is ${loveScore}%</p>
              <div class="share-buttons">
                <button onclick="copyLink()">Copy Link</button>
                <button onclick="shareWhatsApp()">Share on WhatsApp</button>
                <button onclick="shareFacebook()">Share on Facebook</button>
                <button onclick="shareInstagram()">Share on Instagram</button>
              </div>
              <p>Our love score is ${loveScore}%. Visit <a href="${window.location.href}">this link</a> to calculate your results.</p>
            </div>
            <script>
              function copyLink() {
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                  alert('Link copied to clipboard!');
                });
              }
              function shareWhatsApp() {
                const url = window.location.href;
                window.open(\`https://api.whatsapp.com/send?text=Check out our love compatibility: \${url}\`, '_blank');
              }
              function shareFacebook() {
                const url = window.location.href;
                window.open(\`https://www.facebook.com/sharer/sharer.php?u=\${url}\`, '_blank');
              }
              function shareInstagram() {
                const url = window.location.href;
                window.open(\`https://www.instagram.com/?url=\${url}\`, '_blank');
              }
            </script>
          </body>
          </html>
        `);
      }, 30000);
    }
  }, 5000);
}
