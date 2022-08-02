const button = document.querySelector("#btn");

// Function for calculating BMI
button.addEventListener("click", calculateBMI);

function calculateBMI() {

/* Getting input from user into height variable.
Input is string so typecasting is necessary. */
const height = parseInt(document.querySelector("#height").value);

/* Getting input from user into weight variable. Input is string and convert to int.*/
const weight = parseInt(document.querySelector("#weight").value);

const result = document.querySelector("#result");

// Checking the user providing a proper value or not
if (height === "" || isNaN(height)){
    result.innerText = "Please, insert a valid Height";
} else if (weight === "" || isNaN(weight)) {
    result.innerText = "Please, insert a valid Weight";
} 
// If both input is valid, calculate the BMI
else {
// Fixing upto 2 decimal places
    const bmi = (weight / ((Math.pow(height, 2)) / 10000)).toFixed(2);

// Categorize according to BMI ranges
    if (bmi < 18.6) {
        result.innerText = `Under Weight: Your BMI is ${bmi}`;
    } else if (bmi >= 18.6 && bmi < 24.9) { 
        result.innerText = `Normal: Your BMI is ${bmi}`;
    } else { result.innerText = `Over Weight: Your BMI is ${bmi}`;
}}
}