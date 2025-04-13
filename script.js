const flowerBtn = document.getElementById('flowerButton');
const flowerPassword = document.getElementById('flowerPassword');
const errorMsg = document.getElementById('errorMsg');

if (flowerBtn) {
  flowerBtn.onclick = () => {
    const input = flowerPassword.value.trim().toLowerCase();
    if (input === 'kocham patryka') {
      window.location.href = 'randka.html';
    } else {
      errorMsg.textContent = 'NIE JESTEŚ AMI!!!!';
    }
  };
}

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const importantBtn = document.getElementById('importantBtn');
const loveLetter = document.getElementById('loveLetter');
const closeLetter = document.getElementById('closeLetter');

let heartInterval;
let spinCount = 0;

if (spinBtn && wheel) {
  spinBtn.onclick = () => {
    spinCount++;
    const baseRotations = 6;
    const slowDown = Math.min(spinCount, 6);
    const fullRotation = 360 * (baseRotations - Math.floor(slowDown / 2));
    const randomOffset = Math.floor(Math.random() * 360);
    const rotateTo = fullRotation + randomOffset;

    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${rotateTo}deg)`;

    createConfetti(60); // leci po zakręceniu kołem
  };
}

function createConfetti(amount = 30, intervalTime = 50) {
  let created = 0;
  const confettiInterval = setInterval(() => {
    if (created >= amount) {
      clearInterval(confettiInterval);
      return;
    }
    created++;

    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.top = '-50px';
    confetti.style.position = 'fixed';
    confetti.style.animation = 'fall 3s linear forwards';
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = 'none';

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }, intervalTime);
}

function startHeartShower() {
  heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}

if (importantBtn) {
  importantBtn.onclick = () => {
    startHeartShower();
    loveLetter.style.display = 'block';
  };
}

if (closeLetter) {
  closeLetter.onclick = () => {
    loveLetter.style.display = 'none';
    clearInterval(heartInterval);
  };
}
