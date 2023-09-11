let currentCardIndex = 0;

function displayFlashcard(index) {
  const questionContainer = document.getElementById("question");
  const answerContainer = document.getElementById("answer");

  if (index < flashcardsNetworking.length) {
    questionContainer.textContent = flashcardsNetworking[index].question;
    answerContainer.textContent = ''; // Clear the answer
  } else {
    // All flashcards have been shown
    questionContainer.textContent = "Congratulations! You've completed all flashcards.";
    answerContainer.textContent = '';
  }
}

// Call the function to display the initial flashcard
displayFlashcard(currentCardIndex);
