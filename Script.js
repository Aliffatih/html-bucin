const gombalan = [
    "Aku nggak butuh peta, karena hatiku selalu menuju ke kamu. ❤️",
    "Kamu itu seperti matematika, makin aku pikirin makin nggak bisa aku lepasin. 😍",
    "Kalau aku jadi superhero, kekuatanku adalah selalu membuatmu tersenyum. 🦸‍♂️",
    "Kamu punya WiFi di hati ya? Soalnya aku merasa selalu terhubung denganmu. 💕",
    "Aku nggak butuh alarm, karena senyum kamu selalu membangunkan hatiku. ☀️"
];

document.getElementById("gombalButton").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * gombalan.length);
    document.getElementById("gombalText").innerText = gombalan[randomIndex];

    let audio = document.getElementById("music");
    if (audio.paused) {
        audio.play();
    }
});

function buatHati() {
    let heart = document.createElement("div");
    heart.className = "hearts";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(buatHati, 500);