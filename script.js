(() => {
  const candle = document.querySelector("#candle");
  const messageButton = document.querySelector("#message-button");
  const card = document.querySelector(".card");
  const reveal = document.querySelector("#reveal");
  const confetti = document.querySelector("#confetti");
  let opened = false;

  function celebrate() {
    const colors = [
      "#d67d88",
      "#e8bb73",
      "#f0a88f",
      "#d7a9c7",
      "#a9c5aa",
      "#f2d58b"
    ];

    for (let i = 0; i < 64; i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.setProperty("--duration", `${3 + Math.random() * 3}s`);
      piece.style.setProperty(
        "--drift",
        `${Math.round((Math.random() - 0.5) * 240)}px`
      );
      piece.style.setProperty(
        "--spin",
        `${Math.round(Math.random() * 900 - 450)}deg`
      );
      piece.style.animationDelay = `${Math.random() * 0.9}s`;

      confetti.append(piece);
      piece.addEventListener("animationend", () => piece.remove(), {
        once: true
      });
    }
  }

  candle.addEventListener("click", () => {
    if (opened) return;

    opened = true;
    card.classList.add("blown");
    candle.setAttribute("aria-pressed", "true");
    candle.setAttribute(
      "aria-label",
      "La vela está apagada. Feliz cumpleaños, Andrea."
    );

    messageButton.hidden = false;
    messageButton.classList.add("button-entrance");
    celebrate();
  });

  messageButton.addEventListener("click", () => {
    card.classList.add("show-messages");
    messageButton.setAttribute("aria-expanded", "true");
    reveal.setAttribute("aria-hidden", "false");
    reveal.removeAttribute("inert");
    messageButton.textContent = "Con mucho cariño para ti ♡";
    messageButton.disabled = true;

    window.setTimeout(() => {
      reveal.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 180);
  });
})();