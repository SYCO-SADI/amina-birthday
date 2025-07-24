
function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
}

const countDownDate = new Date("July 25, 2025 00:00:00").getTime();
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s until Amina's birthday";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "🎉 Happy Birthday Amina! 🎉";
    }
}, 1000);
