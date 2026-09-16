// Burger menu for mobile
const nav = document.querySelector("#nav_links");
const button = document.querySelector("#burger_button");

button.addEventListener("click", (event) => {
  nav.classList.toggle("active");
  button.classList.toggle("active");

  // Find the SVG with the FontAwesome
  const icon = button.querySelector("svg");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
