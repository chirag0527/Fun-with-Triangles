const sideInputs = document.querySelectorAll('.sideInput');
const areaBtn = document.querySelector('.areaBtn');
const areaAnswer = document.querySelector('#areaAns');

function calculateArea() {
	const area = (sideInputs[0].value*sideInputs[1].value)/2;
	areaAnswer.innerText = `The area of the triangle is ${area} cm²`;
}

areaBtn.addEventListener('click', calculateArea);