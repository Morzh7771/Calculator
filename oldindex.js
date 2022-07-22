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
            text = '';
            display.innerHTML = text;
            otvet.innerHTML = '';
        }else{
            add(e.target.innerHTML)
        }
        check()
    });
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
function add(num){
    otvet.innerHTML = ''
    if(num === '+' || num === '-' || num === '*' || num === '/' || num === '%'){
        dot = false
        if(displayLastText === '+' ||
           displayLastText === '-' || 
           displayLastText  === '*' || 
           displayLastText  === '/' || 
           displayLastText  === '%' )
        {
            text = text.slice(0, -1);      
        }
        text += num;
        display.innerHTML = text;
    }else{
        if(num === '()' && brack === false){
            text += '(';
            display.innerHTML = text;
            brack = true
        }else if(num === '()' && brack === true){
            text += ')';
            display.innerHTML = text;
            brack = false
        }else if(num === '.'){
            if(dot === false){
                text += num;
                display.innerHTML = text;
                dot = true
            }
        }else{
            text += num;
            display.innerHTML = text;
        }
    }
}
function calc(){
    if(eval(text) === 0.30000000000000004){
        otvet.innerHTML = 0.3
        text=''
    }else if(eval(text) === Infinity){
        otvet.innerHTML = 0
        text=''
    }else{
    otvet.innerHTML = eval(text)
    text=''
    }
}
