var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weigth-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height,weight;

calculateButton.addEventListener("click", () =>{
    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / Math.pow((height/100),2)).toFixed(1);
    result.innerText = BMI;

    if(BMI < 18.5){
        result.style.color="#ffc44d";
        statement.innerText = "Underweight 😒";
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        result.style.color="#0be881";
        statement.innerText = "Normal 😍";
    }
    else if(BMI >= 25 && BMI <= 29.9){
        result.style.color="ff884d"
        statement.innerText = "Overweight 😮"
    }
    else if(height == '' | weight == ''){
        alert('you need to put the required input pls')
        statement.innerText = ""
        result.innerText=''
    }
    else{
        result.style.color="#ff5e57"
        statement.innerText = "Obese 😱"
    }


});