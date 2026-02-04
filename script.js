window.onload = () => {
  /* ---------- ELEMENTS ---------- */
  const greeting = document.getElementById("greeting");
  const subtext = document.getElementById("subtext");

  const teddy = document.querySelector(".teddy");
  const button = document.querySelector(".gift-btn");
  const loader = document.querySelector(".loader");
  const chocolate = document.querySelector(".chocolate");
  const finalMessage = document.querySelector(".final-message");
  const nightMessage = document.getElementById("night-message");

  /* ---------- SAFETY CHECK ---------- */
  if (!greeting || !subtext || !teddy || !button || !loader || !chocolate || !finalMessage) {
    console.error("Some elements are missing in HTML");
    return;
  }

  /* ---------- PERSONALIZATION ---------- */
  const name = "Chittu";
  const hour = new Date().getHours();

  greeting.innerText = `Hey ${name} 😊`;

  if (hour < 12) {
    subtext.innerText = "Hope this makes your morning sweeter 🍫";
  } else if (hour < 18) {
    subtext.innerText = "A little sweetness for your day 🍫";
  } else {
    subtext.innerText = "Ending the day with something sweet 🍫";
  }

  /* ---------- INITIAL STATES ---------- */
  loader.style.display = "none";
  chocolate.classList.remove("show");
  finalMessage.classList.remove("show");

  if (nightMessage) {
    nightMessage.classList.remove("show");
  }

  /* ---------- TEDDY APPEAR ---------- */
  setTimeout(() => {
    teddy.classList.add("show");

    // Teddy blink (once)
    setTimeout(() => {
      teddy.classList.add("blink");
      setTimeout(() => {
        teddy.classList.remove("blink");
      }, 200);
    }, 2000);
  }, 500);

  /* ---------- BUTTON APPEAR ---------- */
  setTimeout(() => {
    button.classList.add("show");
  }, 2000);

  /* ---------- BUTTON CLICK ---------- */
  button.addEventListener("click", () => {
    button.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.display = "none";
      chocolate.classList.add("show");
      finalMessage.classList.add("show");

      // Late night message logic (LOCAL TIME)
      const currentHour = new Date().getHours();
      if ((currentHour >= 23 || currentHour < 2) && nightMessage) {
        setTimeout(() => {
          nightMessage.classList.add("show");
        }, 1000);
      }

    }, 2500);
  });
};
