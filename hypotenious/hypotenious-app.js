var firstSideInput = document.querySelector(".side-1");
var secondsideInput = document.querySelector(".side-2");

var checkBtn = document.querySelector(".btn-calculate");
var outputDisplay = document.querySelector(".output");


checkBtn.addEventListener('click', function calculateHypotenious(){
    const a = firstSideInput.value;
    const b = secondsideInput.value;
    const sum = a*a + b*b;
    const c = Math.sqrt(sum);
    outputDisplay.innerText= "Hypotenious is: "+ c.toFixed(2)+" cm";
});