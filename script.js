//your code here
let min = -20;
let max = 20;

// console.log("hello World")
let number = document.getElementById("guess");
let text = document.getElementById("num");

function result(){
    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    console.log(number.value);
    console.log(randomNumber);
    text.textContent = randomNumber;

    if(randomNumber > (number.value - 5) && randomNumber < (number.value + 5)) {
        text.textContent = "Hot";
    } else {
        text.textContent = "Cold";
    }
    
}
