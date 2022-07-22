let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.primer');
let otvet = document.querySelector('.otvet');
let displaytext = display.innerHTML
let displayLast = display.innerHTML.length-1
let displayLastText = displaytext[displayLast]
let text = '';
let brack = false
let dot = false
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        if(e.target.innerHTML === '='){
            calc()
        }else if(e.target.innerHTML === '⌫'){
            backspace()
        }else if(e.target.innerHTML ==='AC'){
            AC()
        }else if(e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*' || e.target.innerHTML === '/' || e.target.innerHTML === '%'){
            addOperator(e.target.innerHTML)
        }else if(e.target.innerHTML === '.'){
            addDot(e.target.innerHTML)
        }else if(e.target.innerHTML === '()'){
            addBrack(e.target.innerHTML)
        }else{
            add(e.target.innerHTML)
        }
        check()
    });
}
function AC(){
    text = '';
    display.innerHTML = text;
    otvet.innerHTML = '';
}
function check(){
    displayLast = display.innerHTML.length-1
    displaytext = display.innerHTML
    displayLastText = displaytext[displayLast]
}
function backspace(){
    text = text.slice(0, -1);
    display.innerHTML = text;
}
function addBrack(num){
    if(num === '()' && brack === false ){
        text += '(';
        display.innerHTML = text;
        brack = true
    }else if(num === '()' && brack === true){
        text += ')';
        display.innerHTML = text;
        brack = false
    }
}
function addOperator(num){
    if(num === '+' || num === '-' || num === '*' || num === '/' || num === '%'){
        dot = false
        if(displayLastText === '-' || 
           displayLastText === '+' ||
           displayLastText === '*' || 
           displayLastText === '/' || 
           displayLastText === '%' )
        {
            text = text.slice(0, -1);      
        }
        text += num;
        display.innerHTML = text;
    }
}
function addDot(num){
    if(num === '.'){
        if(dot === false){
            text += num;
            display.innerHTML = text;
            dot = true
        }
    }
}
function add(num){
    otvet.innerHTML = ''
    text += num;
    display.innerHTML = text;
}
function calc(){
    otvet.innerHTML = ''
    console.log(text)
    if(eval(text) === 0.30000000000000004){
        otvet.innerHTML = 0.3
    }else if(eval(text) === Infinity){
        otvet.innerHTML = 0
    }else{
        otvet.innerHTML = eval(text)
    }

}
