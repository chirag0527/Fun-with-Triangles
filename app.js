const button = document.querySelector(".isTriBtn")
const answer1 = document.querySelector("#isTriAns")
const angle1 = document.querySelector(".one")
const angle2 = document.querySelector(".two")
const angle3 = document.querySelector(".three")

button.addEventListener('click', checkTriangle);

function calcSum(){
    const SumOfAngles = Number(angle1.value) + Number(angle2.value) + Number(angle3.value) ;
    return SumOfAngles;
}

function checkTriangle() {
    if (calcSum() == 180) {
        answer1.innerText = 'The angles form a triangle';
    } 
    else{
        answer1.innerText = 'Oh no!, the angles do not form a triangle';
    }
}



