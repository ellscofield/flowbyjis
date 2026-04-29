onload = () =>{
        document.body.classList.remove("container");
};

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
    document.getElementById("intro").style.display = "none";
    document.getElementById("flowerScene").style.display = "block";

    const music = document.getElementById("bgMusic");
    
    music.volume = 0;
    music.play();

    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.5) {
            vol += 0.02;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

window.onload = () => {
    document.body.classList.remove("container");

    typingEl = document.getElementById("typing");
    button = document.getElementById("startBtn");

    typeText();
};
