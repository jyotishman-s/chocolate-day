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
    text = "Starting the morning with something sweet 🍫";
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
  }, 700);

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
          // After final message appears
setTimeout(() => {

  const extraLink = document.createElement("a");
  extraLink.href = "valentine week.html";
  extraLink.innerText = "there’s a little extra 🙂";

  // Styling (soft pill button)
  extraLink.style.display = "inline-block";
  extraLink.style.marginTop = "28px";
  extraLink.style.padding = "8px 18px";
  extraLink.style.fontSize = "14px";
  extraLink.style.borderRadius = "20px";
  extraLink.style.textDecoration = "none";
  extraLink.style.background = "#fff0f4";
  extraLink.style.color = "#cc6f83";
  extraLink.style.border = "1px solid #f5c5cf";
  extraLink.style.transition = "all 0.25s ease";
  extraLink.style.opacity = "0.9";

  // Hover effect
  extraLink.onmouseover = () => {
    extraLink.style.background = "#ffe4ea";
    extraLink.style.transform = "translateY(-2px)";
  };

  extraLink.onmouseout = () => {
    extraLink.style.background = "#fff0f4";
    extraLink.style.transform = "translateY(0)";
  };

  finalMessage.insertAdjacentElement("afterend", extraLink);

}, 1200);


        }, 1200);

      }, 400);

    }, 2200);
  });

});





