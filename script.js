const greeting = document.getElementById("greeting");
const subtext = document.getElementById("subtext");

const name = "Chittu";
const hour = new Date().getHours();

greeting.textContent = `Hey ${name} 😊`;

if (hour < 12) {
  subtext.textContent = "Hope this makes your morning sweeter 🍫";
} else if (hour < 18) {
  subtext.textContent = "A little sweetness for your day 🍫";
} else {
  subtext.textContent = "Ending the day with something sweet 🍫";
}


window.onload = () => {
  const teddy = document.querySelector(".teddy");
  const chocolate = document.querySelector(".chocolate");
  const message = document.querySelector(".final-message");
  const button = document.querySelector(".gift-btn");
  const loader = document.querySelector(".loader");

  // Teddy drops
   setTimeout(() => {
  teddy.classList.add("show");

  // Teddy blinks once after landing
  setTimeout(() => {
    teddy.classList.add("blink");

    // Remove blink class so it doesn’t repeat
    setTimeout(() => {
      teddy.classList.remove("blink");
    }, 200);

  }, 2000);

}, 500);


  // Button appears after teddy
  setTimeout(() => {
    button.classList.add("show");
  }, 2000);

  // On button click
  button.addEventListener("click", () => {
    button.style.display = "none";
    loader.style.opacity = "1";

    setTimeout(() => {
      loader.style.display = "none";
      chocolate.classList.add("show");
      message.classList.add("show");
    }, 2500);

  );
};






