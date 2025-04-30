function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    const answers = {
        q1: 'B',  // Correct answer for Question 1
        q2: 'C',  // Correct answer for Question 2
        q3: 'A',  // Correct answers for Question 3
        q4: ['A', 'C'],  // Correct answers for Question 4
        q5: 'World Wide Web',  // Correct answer for Question 5
        q6: 'B',  // Correct answer for Question 6
        q7: 'B',  // Correct answer for Question 7
    };

    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: [...form.q4].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value),
        q5: form.q5.value.trim().toLowerCase(),
        q6: form.q6.value,
        q7: form.q7.value,
    };

    // Checking answers
    let result = "<h2>Your Results:</h2>";

    // Question 1
    if (userAnswers.q1 === answers.q1) {
        score++;
        result += `<p>Q1: Correct - Tim Berners-Lee, 1989</p>`;
    } else {
        result += `<p>Q1: Incorrect - The correct answer is Tim Berners-Lee, 1989</p>`;
    }

    // Question 2
    if (userAnswers.q2 === answers.q2) {
        score++;
        result += `<p>Q2: Correct - TCP/IP</p>`;
    } else {
        result += `<p>Q2: Incorrect - The correct answer is TCP/IP</p>`;
    }

    // Question 3
    if (userAnswers.q3 === answers.q3) {
        score++;
        result += `<p>Q3: Correct - They organized and made websites accessible through advanced algorithms</p>`;
    } else {
        result += `<p>Q3: Incorrect - They organized and made websites accessible through advanced algorithms</p>`;
    }

    // Question 4
    const correctQ4 = answers.q4.sort().join(',');
    const userQ4 = userAnswers.q4.sort().join(',');
    if (userQ4 === correctQ4) {
        score++;
        result += `<p>Q4: Correct - A) The template uses external and inline CSS to style the webpage, 
        including links to Google and Cloudflare stylesheets for additional fonts.Apple and Banana are fruits. 
        C) The template includes a responsive layout, with a clean design, 
        organized navigation bar, and a footer element displaying social media platform badges.</p>`;
    } else {
        result += `<p>Q4: Incorrect - The correct answers are A) The template uses external and inline CSS to style the webpage, 
        including links to Google and Cloudflare stylesheets for additional fonts.Apple and Banana are fruits. 
        C) The template includes a responsive layout, with a clean design, 
        organized navigation bar, and a footer element displaying social media platform badges.</p>`;
    }

    // Question 5
    if (userAnswers.q5.toLowerCase() === answers.q5.toLowerCase()) {
        score++;
        result += `<p>Q5: Correct - WWW stands for World Wide Web</p>`;
    } else {
        result += `<p>Q5: Incorrect - The correct answer is World Wide Web</p>`;
    }

    // Question 6
    if (userAnswers.q6 === answers.q6) {
        score++;
        result += `<p>Q6: Correct - Uniform Resource Locator</p>`;
    } else {
        result += `<p>Q6: Incorrect - The correct answer is Uniform Resource Locator</p>`;
    }

    // Question 7
    if (userAnswers.q7 === answers.q7) {
        score++;
        result += `<p>Q7: Correct - The advancement in the algorithms used in search engines.</p>`;
    } else {
        result += `<p>Q7: Incorrect - The correct answer is The advancement in the algorithms used in search engines.</p>`;
    }
    
    // Show the total score and pass/fail
    result += `<h3>Total Score: ${score} / 7</h3>`;
    result += score >= 5 ? "<p class='pass'>Congratulations! You passed the quiz!</p>" : "<p class='fail'>You did not pass. Try again!</p>";
    
    document.getElementById('result').innerHTML = result;
}

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('result').innerHTML = '';
}
