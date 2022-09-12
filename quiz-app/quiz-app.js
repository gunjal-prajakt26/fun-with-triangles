var formContainer = document.querySelector(".form-container");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector(".output-display");

const  correctAnswers =["90°", "right angled", "An angle that measures less than 90", "3", "Equilateral"];
        
submitBtn.addEventListener('click', function calculateScore(){
    const myData = new FormData(formContainer);

    let score = 0;
    let index = 0;

    for(let data of myData.values()){
       
        if(data === correctAnswers[index]){
            score= score + 1  ;
       }
       index= index + 1 ;
    }
    output.style.border= "2px solid #475569";
    output.innerText = "Your Score is: " + score;
});