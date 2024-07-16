function checkLoveMeter() {
  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;

  if (!yourName || !partnerName) {
    alert('Please enter both names.');
    return;
  }

  document.getElementById('result').style.display = 'block';
}
