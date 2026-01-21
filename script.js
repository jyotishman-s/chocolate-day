window.onload = () => {
  const teddy = document.querySelector(".teddy");
  const chocolate = document.querySelector(".chocolate");
  const message = document.querySelector(".final-message");
  const button = document.querySelector(".gift-btn");
  const loader = document.querySelector(".loader");

  // Teddy drops
  setTimeout(() => {
    teddy.classList.add("show");
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
  });
};

