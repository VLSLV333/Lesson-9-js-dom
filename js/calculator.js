document.querySelector(".calculator .eq").addEventListener("click", calc);
function calc(){
    const display = document.querySelector(".calculator .display");
    display.value = eval(display.value);
}