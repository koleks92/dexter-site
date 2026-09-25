// Gallery / Lightbox
const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.querySelector("#modal");
const closeButton = modal.querySelector("div");

// Close modal
closeButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

// Open modal and change the image
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    // Open modal
    modal.classList.toggle("active");
    // Change img and figcation
    modal
      .querySelector("img")
      .setAttribute("src", thumbnail.getAttribute("src").replace("_600", ""));
    modal.querySelector("figcaption").innerHTML = thumbnail.getAttribute("alt");
  });
});
