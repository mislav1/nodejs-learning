const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}

const randomTime = Math.random() * 4000;

//setTimeout(showSurprise, randomTime);


//with anonymous function
setTimeout( () => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);