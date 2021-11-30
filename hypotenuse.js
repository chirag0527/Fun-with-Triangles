const Button = document.querySelector('.HypBtn');
const Answer = document.querySelector('#HypAns');
const sides = document.querySelectorAll('.sideInput');

function calculateHypotenuse() {
	const sumOfSquares = sides[0].value*sides[0].value + sides[1].value*sides[1].value;
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	Answer.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}

Button.addEventListener('click', calculateHypotenuse);