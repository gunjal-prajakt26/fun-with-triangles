var firstSideInput = document.querySelector(".side-1");
var secondsideInput = document.querySelector(".side-2");

var checkBtn = document.querySelector(".btn-calculate");
var outputDisplay = document.querySelector(".output");


checkBtn.addEventListener('click', function calculateHypotenious(){
    const a = firstSideInput.value;
    const b = secondsideInput.value;
   if(a > 0 && b > 0){
    const sum = a*a + b*b;
    const c = Math.sqrt(sum);
    outputDisplay.style.border= "2px solid #475569";
    outputDisplay.innerText= "Hypotenious is: "+ c.toFixed(2)+" cm";
   }else{
    outputDisplay.style.border= "2px solid red";
    outputDisplay.innerText= "Enter all fields & all values shoud be positive";
   }
});