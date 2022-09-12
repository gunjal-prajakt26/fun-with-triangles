var inputBase = document.querySelector(".input-base");
var heightInput = document.querySelector(".height-of-triangle");

var checkBtn = document.querySelector(".btn-calculate");
var outputDisplay = document.querySelector(".output");


checkBtn.addEventListener('click', function calculateHypotenious(){
    const a = inputBase.value;
    const b = heightInput.value;
    
    if(a > 0 && b > 0){
        const c = 1/2 * (a*b);
    outputDisplay.style.border= "2px solid #475569";
    outputDisplay.innerText= "The area of the triangle is "+c+" cm²";
    }else{
    outputDisplay.style.border= "2px solid red";
    outputDisplay.innerText= "Enter all fields & all values shoud be positive";
    }
});