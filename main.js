const texts = [
    "찬티카 안녕하세요...",
    "너에게 줄 게 있어",
    "보기 전에 편지 먼저 읽어줘"
];

let textIndex = 0;
let charIndex = 0;

let typingEl;
let button;
let rainInterval = null; 

// ================= INIT =================
window.onload = () => {
    document.body.classList.remove("container");

    typingEl = document.getElementById("typing");
    button = document.getElementById("startBtn");

    // sembunyikan semua scene awal
    document.getElementById("flowerScene").style.display = "none";
    document.getElementById("envelopeScene").style.display = "none";

    typeText();
};

// ================= TYPING =================
function typeText() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            typingEl.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 60);
        } else {
            setTimeout(() => {
                typingEl.innerHTML = "";
                charIndex = 0;
                textIndex++;
                typeText();
            }, 1200);
        }
    } else {
        button.style.display = "inline-block";
    }
}

// ================= SHOW ENVELOPE =================
function showFlowers() {
    const intro = document.getElementById("intro");
    const envelope = document.getElementById("envelopeScene");

    intro.style.display = "none";
    envelope.style.display = "flex";
}

// ================= OPEN ENVELOPE =================
function openEnvelope() {
    const letter = document.querySelector(".letter");
    const flap = document.querySelector(".flap");

    letter.classList.add("open");
    flap.style.transform = "rotateX(-180deg)";
}

// ================= BUTTON KE FLOWER =================
function goToFlowers(event) {
    event.stopPropagation(); 
    document.getElementById("envelopeScene").style.display = "none";
    showFlowerScene();
}

// ================= FLOWER SCENE =================
function showFlowerScene() {
    const flower = document.getElementById("flowerScene");
    const music = document.getElementById("bgMusic");

    flower.style.display = "flex"; 

    // reset animation
    flower.classList.remove("cinematic");
    void flower.offsetWidth;
    flower.classList.add("cinematic");

    // mulai love rain
    startLoveRain();

    // musik
    if (music) {
        music.currentTime = 0;
        music.volume = 0;
        music.play().catch(e => console.log(e));

        // fade in musik
        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 0.5) {
                vol += 0.02;
                music.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 120);
    }
}

// ================= LOVE RAIN =================
function startLoveRain() {
    if (rainInterval) return; 

    rainInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
