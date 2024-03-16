setOnClick(eById("modal-submit-to-leaderboard"), () => {
  const name = eById("modal-name-input").value;
  const score = parseInt(eById("modal-score-input").value);

  if (!name || !score) {
    alert("Please enter a name and a score.");
    return;
  }

  // Submit the score to the leaderboard.
  submitScore(name, score);

  // Close the modal.
  closeModal();
});
