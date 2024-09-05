document.getElementById('love-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  if (name1 && name2) {
    const url = `results.html?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`;
    window.open(url, '_blank');
  }
});
