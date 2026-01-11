// Play background music (optional)
const music = document.getElementById("bgMusic");
music.volume = 0.4;
music.play();

// CONFETTI SETUP
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function createConfetti() {
  confettiParticles.push({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 6 + 4,
    d: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(p.d);

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

// Generate confetti continuously
setInterval(createConfetti, 100);
drawConfetti();

// Add floating balloons
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.animationDuration = (6 + Math.random() * 4) + "s";
  document.body.appendChild(balloon);
}

// create 10 balloons
for (let i = 0; i < 10; i++) {
  createBalloon();
}