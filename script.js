document.getElementById('love-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  if (name1 && name2) {
    // Open the new tab with the ad and pass names in the query params
    const adWindow = window.open(`ad.html?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`, '_blank');

    // Wait 30 seconds, then close the ad window and open the final results
    setTimeout(function() {
      adWindow.close();
      const finalURL = `final.html?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`;
      window.location.href = finalURL;
    }, 30000); // 30 seconds
  }
});
