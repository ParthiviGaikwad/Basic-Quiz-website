// Initialize an object to store user scores
let userScores = JSON.parse(localStorage.getItem("userScores")) || {};

// Function to handle quiz submission
function submitQuiz() {
    const correctAnswers = ["c", "b", "b", "c", "c"]; // Correct answers
    let score = 0;

    // Get user name
    const userName = document.getElementById("username").value.trim();
    if (!userName) {
        alert("Please enter your name.");
        return;
    }

    // Check answers
    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[i - 1]) {
            score++;
        }
    }

    // Save the user's name and score in the userScores object
    userScores[userName] = score;

    // Save the updated userScores object to localStorage
    localStorage.setItem("userScores", JSON.stringify(userScores));

    // Redirect to the result page (ensure the page exists)
    window.location.href = "/result";
}

// Function to display scores on the result page
function displayScores() {
    const scores = JSON.parse(localStorage.getItem("userScores")) || {};
    const resultContainer = document.getElementById("resultContainer");

    if (resultContainer) {
        resultContainer.innerHTML = ""; // Clear any existing content
        for (const [user, score] of Object.entries(scores)) {
            const userScoreElement = document.createElement("p");
            userScoreElement.textContent = `${user}: ${score} / 5`;
            resultContainer.appendChild(userScoreElement);
        }
    }
}
