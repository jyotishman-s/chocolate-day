window.onload = () => {
  const greeting = document.getElementById("greeting");
  const subtext = document.getElementById("subtext");
  const teddy = document.querySelector(".teddy");
  const button = document.querySelector(".gift-btn");

  if (!greeting || !subtext || !teddy || !button) {
    console.error("Missing elements in HTML");
    return;
  }

  greeting.innerText = "Hey Chittu 😊";
  subtext.innerText = "I have something sweet for you 🍫";

  teddy.style.opacity = "1";
  button.style.opacity = "1";
};


