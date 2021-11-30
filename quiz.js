const quizForm = document.querySelector('.quiz-form');
const scoreDiv = document.querySelector('#quizScore');
const submitButton = document.querySelector('#submit-btn');

const correctAnswers = ['80°', 'equilateral'];

function calculateScore(e) {
	e.preventDefault();
	const data = new FormData(quizForm);
	let index = 0,
		score = 0;
	for (let entry of data.values()) {
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
	scoreDiv.innerText = `Your score is ${score}`;
}

submitButton.addEventListener('click', calculateScore);