document.addEventListener("DOMContentLoaded", () => {

  /* ===== SELECT ELEMENTS ===== */
  const greeting = document.getElementById("greeting");
  const subtext = document.getElementById("subtext");
  const teddy = document.querySelector(".teddy");
  const button = document.querySelector(".gift-btn");
  const loader = document.querySelector(".loader");
  const chocolate = document.querySelector(".chocolate");
  const finalMessage = document.querySelector(".final-message");

  /* ===== SAFETY CHECK ===== */
  if (!greeting || !subtext || !teddy || !button || !loader || !chocolate || !finalMessage) {
    console.error("❌ Required HTML elements missing");
    return;
  }

  /* ===== INITIAL STATE ===== */
  loader.style.display = "none";
  chocolate.style.display = "none";
  finalMessage.style.display = "none";
  button.style.display = "inline-block";
button.style.opacity = "1";


  /* ===== GREETING + DYNAMIC SUBTEXT ===== */
  const hour = new Date().getHours();

  greeting.innerText = "Hey Chittu 😊";

  let text = "";
  if (hour >= 5 && hour < 12) {
    text = "Starting the day with something sweet 🍫";
  } else if (hour >= 12 && hour < 18) {
    text = "A little sweetness for your day 🍫";
  } else {
    text = "Ending the day with something sweet 🍫";
  }

  setTimeout(() => {
    subtext.innerText = text;
    subtext.classList.add("show");
  }, 600);

  /* ===== TEDDY ENTRY ===== */
  setTimeout(() => {
    teddy.classList.add("show");
  }, 400);

  /* ===== BUTTON CLICK FLOW ===== */
  button.addEventListener("click", () => {
    button.disabled = true;
    button.style.display = "none";

    // SHOW LOADER
    loader.style.display = "block";
    loader.classList.add("show");

    // LOADER DURATION
    setTimeout(() => {
      loader.classList.remove("show");

      setTimeout(() => {
        loader.style.display = "none";

        // SHOW CHOCOLATE
        chocolate.style.display = "block";
        chocolate.classList.add("show");

        // SHOW FINAL MESSAGE
        setTimeout(() => {
          finalMessage.style.display = "block";
          finalMessage.classList.add("show");

          // ===== NIGHT MESSAGE (11PM–2AM) =====
          const h = new Date().getHours();
          if (h >= 23 || h < 2) {
            setTimeout(() => {
              const nightMsg = document.createElement("p");
              nightMsg.className = "night-message";
              nightMsg.innerHTML = "Hui jaa etiya 😴<br>Kaille school ase";

              finalMessage.insertAdjacentElement("afterend", nightMsg);

              requestAnimationFrame(() => {
                nightMsg.classList.add("show");
              });
            }, 1500);
          }

        }, 1200);

      }, 400);

    }, 2200);
  });

});


