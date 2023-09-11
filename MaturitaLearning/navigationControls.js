const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", () => {
  currentCardIndex++;
  displayFlashcard(currentCardIndex);
});

prevButton.addEventListener("click", () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    displayFlashcard(currentCardIndex);
  }
});
