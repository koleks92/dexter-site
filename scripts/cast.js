// Read more.../Read less
const readMoreButtons = document.querySelectorAll(".read_more");

// Event listener
readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Switch visibility
    button.previousElementSibling.classList.toggle("active");
    button.textContent =
      button.textContent === "Read more..." ? "Read less" : "Read more...";
  });
});
