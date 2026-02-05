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

    // 🌙 Late night message (JS-created, LOCAL TIME)
    const hour = new Date().getHours();

    if (hour >= 23 || hour < 2) {
      setTimeout(() => {
        const nightMsg = document.createElement("p");
        nightMsg.className = "night-message";
        nightMsg.innerHTML = "Hui jaa etiya 😴<br>Kaille school ase";

        finalMessage.insertAdjacentElement("afterend", nightMsg);

        // Fade in
        setTimeout(() => {
          nightMsg.classList.add("show");
        }, 50);

      }, 1500); // ⏳ 1.5 sec after chocolate
    }

  }, 2500); // loader duration
});





