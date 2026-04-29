const texts = [
    "Hai kamu...",
    "Aku ga jago ngomong...",
    "Tapi aku bikin ini khusus buat kamu 🌸",
    "Semoga kamu suka ya :)"
];

let textIndex = 0;
let charIndex = 0;

let typingEl;
let button;

window.onload = () => {
    document.body.classList.remove("container");

    typingEl = document.getElementById("typing");
    button = document.getElementById("startBtn");

    // 🔥 PENTING: pastikan bunga tersembunyi
    document.getElementById("flowerScene").style.display = "none";

    typeText();
};

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

function showFlowers() {
    const intro = document.getElementById("intro");
    const flower = document.getElementById("flowerScene");
    const music = document.getElementById("bgMusic");

    // hide intro
    intro.style.display = "none";

    // show flower
    flower.style.display = "block";

    // cinematic reset
    flower.classList.remove("cinematic");
    void flower.offsetWidth;
    flower.classList.add("cinematic");

    // music start
    music.currentTime = 0;
    music.volume = 0;
    music.play().catch(e => console.log(e));

    // fade in music
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
