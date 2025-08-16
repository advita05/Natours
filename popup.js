let popup = document.getElementById("popup");
let popupClose = document.querySelector(".popup__close");

document.addEventListener("mouseup", (event) => {
  if (
    window.getComputedStyle(popup).visibility !== "hidden" &&
    !event.target.closest(".popup__content")
  ) {
    popupClose.click();
  }
});