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
    const adWindow = window.open('https://www.highrevenuenetwork.com/dqpg3cak2?key=b3908da304a081bf9c86f27c84e9e0ee', '_blank');
    if (adWindow) {
      setTimeout(() => {
        const resultURL = `result.html?yourName=${encodeURIComponent(yourName)}&partnerName=${encodeURIComponent(partnerName)}&loveScore=${loveScore}`;
        window.open(resultURL, '_blank');
      }, 30000);
    }
  }, 1000);
}
