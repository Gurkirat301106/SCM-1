document.addEventListener("DOMContentLoaded", () => {
    // Retrieve from localStorage or set default values
    const userScore = localStorage.getItem("quizUserScore") || 0;
    const totalQuestions = localStorage.getItem("quizTotalQuestions") || 0;
  
    // Display the data
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("total-questions").textContent = totalQuestions;
  });
  