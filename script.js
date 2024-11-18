let display = document.getElementById("display");
let dec = document.getElementById("dec");
let inc = document.getElementById("icre");
let clr = document.getElementById("clr");
let error = document.querySelector(".error-message");
let count = 1;

function updateDisplay(){
 display.textContent = count;
 dec.disabled = count === 0 ? true : false;
 error.style.display = count > 0 ? "none" : "block";
clr.style.display = count === 0 ? "none" : "block";
}
function increment(){
    count++;
    updateDisplay()
}
function decrement(){
    if(count > 0){
        count--;
        updateDisplay()
    }
    else{
        error.style.display = "block";
    }
}
function clearCount(){
    count = 0;
    updateDisplay()
}
updateDisplay();
