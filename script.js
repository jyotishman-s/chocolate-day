window.onload = () => {
  /* ========= ELEMENTS ========= */
  const greeting = document.getElementById("greeting");
  const subtext = document.getElementById("subtext");
  const teddy = document.querySelector(".teddy");
  const button = document.querySelector(".gift-btn");
  const loader = document.querySelector(".loader");
  const chocolate = document.querySelector(".chocolate");
  const finalMessage = document.querySelector(".final-message");

  /* ========= SAFETY ========= */
  if (!greeting || !subtext || !teddy || !button || !loader || !chocolate || !finalMessage) {
    console.error("Missing required HTML elements");
    return;
  }

  /* ========= GREETING (JS-BASED) ========= */
  const name = "Chittu";
  const hour = new Date().getHours();

  greeting.innerText = `Hey ${name} 😊`;

  if (hour < 12) {
    subtext.innerText = "Hope this makes your morning sweeter 🍫";
  } else if (hour < 18) {
    subtext.innerText = "I have something sweet for you 🍫";
  } else {
    subtext.innerText = "Ending the day with something sweet 🍫";
  }

  /* ========= INITIAL STATES ========= */
  teddy.style.display = "block";
  teddy.style.opacity = "1";
setTimeout(() => {
  teddy.classList.add("show");
}, 800);

  

  button.style.display = "inline-block";
  button.style.opacity = "1";

  loader.style.display = "none";
  chocolate.classList.remove("show");
  finalMessage.classList.remove("show");

  /* ========= BUTTON CLICK ========= */
  button.addEventListener("click", () => {
  button.disabled = true;
  button.style.display = "none";

  // SHOW loader
  loader.style.display = "block";
  loader.classList.add("show");

  // Wait → then show chocolate
  setTimeout(() => {
    loader.classList.remove("show");

    setTimeout(() => {
      loader.style.display = "none";

      chocolate.style.display = "block";
      chocolate.classList.add("show");

      setTimeout(() => {
        finalMessage.style.display = "block";
        finalMessage.classList.add("show");

        // 🌙 Night message (if late)
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

      }, 300);

    }, 400);

  }, 2200); // ⏳ loader visible for ~2.2s
});


      // Show chocolate + final message
      chocolate.classList.add("show");
      finalMessage.classList.add("show");

      /* ========= NIGHT MESSAGE (JS-CREATED) ========= */
      const currentHour = new Date().getHours();

      if (currentHour >= 23 || currentHour < 2) {
        setTimeout(() => {
          const nightMsg = document.createElement("p");
          nightMsg.className = "night-message";
          nightMsg.innerHTML = "Hui jaa etiya 😴<br>Kaille school ase";

          finalMessage.insertAdjacentElement("afterend", nightMsg);

          // Fade in
          setTimeout(() => {
            nightMsg.classList.add("show");
          }, 50);

        }, 1500); // ⏳ after chocolate
      }

    }, 2500); // loader time
  });
};


