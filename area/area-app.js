var inputBase = document.querySelector(".input-base");
var heightInput = document.querySelector(".height-of-triangle");

var checkBtn = document.querySelector(".btn-calculate");
var outputDisplay = document.querySelector(".output");


checkBtn.addEventListener('click', function calculateHypotenious(){
    const a = inputBase.value;
    const b = heightInput.value;
    const c = 1/2 * (a*b);
    console.log(c);
    outputDisplay.style.border= "2px solid #475569";
    outputDisplay.innerText= "The area of the triangle is "+c+" cm²";
});