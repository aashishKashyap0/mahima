// script.js

document.addEventListener("DOMContentLoaded", () => {
    const candle = document.getElementById("candle");
    const lightBtn = document.getElementById("lightCandleBtn");

    const photosSection = document.getElementById("photos");
    const messageSection = document.getElementById("message");

    const showPhotosBtn = document.getElementById("showPhotosBtn");
    const showMessageBtn = document.getElementById("showMessageBtn");

    // Light candle + confetti
    if (candle && lightBtn) {
        lightBtn.addEventListener("click", () => {
            if (!candle.classList.contains("candle-lit")) {
                candle.classList.add("candle-lit");
                lightBtn.textContent = "Make a wish ✨ (click again for more confetti)";
                launchConfetti();
            } else {
                launchConfetti();
            }
        });
    }

    // Show Photos section only when button clicked
    if (showPhotosBtn && photosSection) {
        showPhotosBtn.addEventListener("click", () => {
            photosSection.style.display = "block";
            photosSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Show Message section only when button clicked
    if (showMessageBtn && messageSection) {
        showMessageBtn.addEventListener("click", () => {
            messageSection.style.display = "block";
            messageSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});

/**
 * Launch cute confetti pieces from top of the screen
 */
function launchConfetti() {
    const colors = ["#ff69b4", "#ff9fd6", "#ffd1f0", "#ff85c2", "#ffc1de"];
    const pieces = 80;

    for (let i = 0; i < pieces; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");

        // Random horizontal position
        piece.style.left = Math.random() * 100 + "vw";

        // Random size
        const width = 6 + Math.random() * 4;
        const height = 10 + Math.random() * 6;
        piece.style.width = width + "px";
        piece.style.height = height + "px";

        // Random color
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random duration and delay
        const duration = 2 + Math.random() * 1.5;
        const delay = Math.random() * 0.6;
        piece.style.animationDuration = duration + "s";
        piece.style.animationDelay = delay + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, (duration + delay) * 1000 + 500);
    }
}
