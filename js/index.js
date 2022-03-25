document.querySelector('h1').innerText += ' from JavaScript!';

//document = DOM
//window = BOM

/*
// ПОшук елементів у ДОМ дереві
document.querySelector('');// тут пишемо елемент
// знайде один елемент (перший по порядку)
document.querySelectorAll();//знайде всі елементи які відповідають селектору

//більш старі методи
document.getElementById(); // пошук по айді
document.getElementsByClassName(); // пошук по імені класу
document.getElementsByTagName(); // пошук по тегу
*/

const h1 = document.querySelector('h1');
//h1.hidden = true;
//h1.style.color = "red";
//h1.classList.add("color-red"); // додасть h1 елементу клас "колор-ред", а в CSS ми вже прописуємо, що цей клас робить
//h1.innerHTML = `<i>Hello</i>`; // вставить HTML код всередину елемента

// Робимо годинник
const clock = document.querySelector('.clock');
setInterval(updateClock, 1000);
function updateClock(){
        clock.innerText = new Date().toLocaleTimeString();
}

//Таймер зворотнього відліку
/*
const startTime = new Date();
setInterval(updateSelfDestruct);
function updateSelfDestruct(){
    const currTime = new Date();
    const intervalSecs = Math.round((currTime - startTime) / 1000);
    if (intervalSecs > 5){
        document.querySelector("body").innerHTML = " ";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        const container = document.querySelector(".self-destruct");
        container.innerText = 'Self-destruct in ' + (5 - intervalSecs);
    }
}
*/

const dontClickButton = document.querySelector(".dont-click");
dontClickButton.addEventListener("click", selfDestruct);
function selfDestruct() {
    document.querySelector("body").innerHTML = "YOU DIED";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "red"; 
}