document.getElementById('loveCalculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;

  localStorage.setItem('yourName', yourName);
  localStorage.setItem('partnerName', partnerName);

  window.location.href = 'ad.html';
});
