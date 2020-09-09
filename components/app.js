import './scroll.js'
// typing name
const texts = [' David'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
if(count === texts.length){
    count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector('.typing_name').textContent = letter;
if(letter.length === currentText.length){

}
setTimeout(type, 400);

}());

// // typing websites

// const textWeb = [' websites'];
// let webCount = 0;
// let webIndex = 0;
// let webCurrentText = 0;
// let webLetter = '';

// (function typeWeb (){
//     if(webCount === textWeb.length){
//         webCount = 0;
//     }

//     webCurrentText = textWeb[webCount];
//     webLetter = webCurrentText.slice(0,++webIndex);
//     document.querySelector('.typing_web').textContent = webLetter
//     if(webLetter.length === webCurrentText.length){

//     }
//     setTimeout(typeWeb, 240)
// }())
