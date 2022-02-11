var firstAngleInput = document.querySelector(".input-angle-1");
var secondAngleInput = document.querySelector(".input-angle-2");
var thirdAngleInput = document.querySelector(".input-angle-3");

var checkBtn = document.querySelector(".btn-is-triangle");
var outputDisplay = document.querySelector(".output");


checkBtn.addEventListener('click', function isTriangle(){
    outputDisplay.style.border= "2px solid #475569";
    var angleOne = Number(firstAngleInput.value);
    var angleTwo = Number(secondAngleInput.value);
    var angleThird = Number(thirdAngleInput.value);

    var sum = calculatesum(angleOne, angleTwo, angleThird);

    if(sum===180){
        outputDisplay.innerText= "Yeh! It's a triangle";
    }else{
    outputDisplay.innerText= "Sorry! It's not a triangle";
    }
});


function calculatesum (a, b, c){
    var sum = a + b + c;
    return sum;
}