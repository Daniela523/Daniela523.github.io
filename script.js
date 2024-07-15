function checkLoveMeter() {
  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;
  
  if (!yourName || !partnerName) {
    alert('Please enter both names.');
    return;
  }

  alert('Please help us by watching this ad. Press the back button after 30 seconds to view the results.');
  window.open('https://your-ad-link.com', '_blank');
  
  document.getElementById('message').style.display = 'block';
  
  setTimeout(function() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('name1').innerText = yourName;
    document.getElementById('name2').innerText = partnerName;
  }, 30000);
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard!');
  });
}

function shareWhatsApp() {
  const url = window.location.href;
  window.open(`https://api.whatsapp.com/send?text=Check out our love compatibility: ${url}`, '_blank');
}

function shareFacebook() {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareInstagram() {
  const url = window.location.href;
  window.open(`https://www.instagram.com/?url=${url}`, '_blank');
}
