
const display= document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
    display.value="";
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate(){
// Handle square root and power operations
display.value = display.value.replace(/√/g, 'Math.sqrt');
display.value = display.value.replace(/\^/g, '**');
try{
    display.value= eval(display.value);
}
catch(error){
    display.value= "Err";
}
}