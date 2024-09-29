// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3PuGUNddN2eA_h6IsaqjjHSghDQgHSq8",
    authDomain: "love-calculator-image-store.firebaseapp.com",
    projectId: "love-calculator-image-store",
    storageBucket: "love-calculator-image-store.appspot.com",
    messagingSenderId: "203778309437",
    appId: "1:203778309437:web:643c337fb19383871e9954"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Handle form submission
document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const yourName = document.getElementById('yourName').value;
    
    // Open advertisement in a new tab
    const adTab = window.open('https://noohapou.com/4/8056937', '_blank');
    
    // Age verification bypass
    bypassAgeVerification(adTab);

    // Wait for 30 seconds, then close ad and show results
    setTimeout(function() {
        adTab.close();
        
        // Generate a random love score
        const loveScore = Math.floor(Math.random() * 100) + 1;
        
        // Generate the image and upload it to Firebase
        generateAndUploadImage(yourName, loveScore);
    }, 30000);
});

// Function to bypass age verification
function bypassAgeVerification(adTab) {
    adTab.onload = function() {
        // Simulate clicking age verification button
        const verificationButton = adTab.document.querySelector('button[age-verification]');
        if (verificationButton) {
            verificationButton.click();
        }
    };
}

function generateAndUploadImage(userName, loveScore) {
    const canvas = document.getElementById('resultCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;
    
    // Add background color gradient
    const gradient = ctx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0, '#ff99cc');
    gradient.addColorStop(1, '#ff3366');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text for the name and score
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Love Calculator 💖`, canvas.width / 2, 60);
    ctx.font = '24px Arial';
    ctx.fillText(`Hey ${userName},`, canvas.width / 2, 140);
    ctx.fillText(`Your Love Score: ${loveScore}%`, canvas.width / 2, 200);

    // Add emojis based on score
    const emojis = getEmojiByScore(loveScore);
    ctx.fillText(emojis, canvas.width / 2, 260);

    // Add invitation text
    ctx.font = 'italic 18px Arial';
    ctx.fillText(`Calculate your love score at`, canvas.width / 2, 320);
    ctx.fillText(`https://Daniela523.github.io/LoveCalculator`, canvas.width / 2, 350);

    // Convert canvas to Blob and upload to Firebase
    canvas.toBlob(function(blob) {
        const storageRef = firebase.storage().ref();
        const imageName = `love-score-${userName}-${loveScore}.png`;
        const fileRef = storageRef.child(imageName);
        
        fileRef.put(blob).then(() => {
            fileRef.getDownloadURL().then((url) => {
                displayResultImage(url);
            });
        });
    });
}

function getEmojiByScore(score) {
    if (score > 80) return '😍🥰💖';
    if (score > 50) return '😊💘';
    return '😢💔';
}

function displayResultImage(imageUrl) {
    // Show the image and sharing options
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('resultImage').src = imageUrl;

    // Facebook sharing
    document.getElementById('facebookShare').onclick = function() {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`);
    };

    // WhatsApp sharing
    document.getElementById('whatsappShare').onclick = function() {
        const shareText = `Check out my love score! Calculate yours here: https://Daniela523.github.io/LoveCalculator`;
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}&media=${encodeURIComponent(imageUrl)}`);
    };

    // Copy Link
    document.getElementById('copyLink').onclick = function() {
        const linkText = `My love score is amazing! Check yours at https://Daniela523.github.io/LoveCalculator`;
        navigator.clipboard.writeText(linkText);
        alert("Link copied to clipboard!");
    };
}
