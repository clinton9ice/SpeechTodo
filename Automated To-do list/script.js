'use strict';
let currentDate;
var speech;
var transcript; 
currentDate = new Date();
let listContainer = document.querySelector('.contents');

let Input = document.querySelector('#field');

 let form =document.querySelector('#form');

let voice = document.querySelector('#recorder');

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recorder = new SpeechRecognition();
let myDate = document.querySelector('.date');

//date
setInterval(() =>{
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getYear();
  let Date = day + " : " + month + " : " + year;
  myDate.innerHTML = Date;
}, 1000);

//group of arrays
function registeredKeywords(voiced){
//intro
  if(voiced.includes("hi") || voiced.includes("name") || voiced.includes("introduce") ||voiced.includes('hello') || voiced.includes('hey')){
    speech.text = "hi... i'm alvin, how you doing? ";
  }

  //sad mood ):

  if(voiced.includes('not good') || voiced.includes("sad") || voiced.includes('not happy') || voiced.includes('Bored') || voiced.includes("boredom")){
    speech.text = "so sorry about that , would like to hear my jokes?"
  }
if(voiced.includes("go on")|| voiced.includes("i would love to") || voiced.includes("yes please") || voiced.includes("i'm all ears") || voiced.includes("definitely")){
  speech.text = "ok then.";
}

//good mood (:
if(voiced.includes("great") || voiced.includes("fabulous")|| voiced.includes("wonderful") || voiced.includes("fantastically") || voiced.includes("happy")){
  speech.text = "i'm glad to hear that from you, and i would also pray that you keep on having such mood. So what's it for the day ?";
}
//thoughts
if(voiced.includes("nothing") || voiced.includes("i don't know") || voiced.includes("thinking")||voiced.includes("blank")|| voiced.includes("empty")){
  speech.text = "would you mind if i suggest ?. or you just don't know yet ?";
}
//suggestion
if(voiced.includes("don't know yet") || voiced.includes("ok please") || voiced.includes("do me then favour") || voiced.includes("suggestion")){
  speech.text = "ok i think taking a nap might help or calling a friend as well might.";
} 
//appreciation
if(voiced.includes("yeah") || voiced.includes("that might") || voiced.includes("that's right") || voiced.includes("wow") || voiced.includes("ok then")){
speech.text = 'you\'re welcome. Just don\'t think too much.';
}
if(voiced.includes("thanks") || voiced.includes("thank you") || voiced.includes("idea") || voiced.includes("nice thinking") || voiced.includes("great thinking") || voiced.includes("great suggetsion")){
speech.text = "thanks for the compliment. see you soon";
}
//add to the list section
if(voiced.includes("add") || voiced.includes("store") || voiced.includes("go") || voiced.includes("part of") || voiced.includes("increase") || voiced.includes("my") || voiced.includes("want") || voiced.includes("just") || voiced.includes("and") || voiced.includes("buy") || voiced.includes("set") || voiced.includes("remind") || voiced.includes("make") || voiced.includes("get") || voiced.includes("watch") || voiced.includes("pay") || voiced.includes("to") ){
myData(transcript);
speech.text = "done";
}

if(voiced.includes("no") || voiced.includes("fair") || voiced.includes("finished") || voiced.includes("allow") || voiced.includes("hey...")){
  speech.text = "i'm sorry if i was too fast,  but you can still add what you want.";
}
}
//Bot voice
function assistant(reports){
 speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.rate = 1;
speech.pitch = 2; 
speech.text = 'i\'m so sorry as what you\'ve said may not have been registered in my memory.';
registeredKeywords(reports);
  window.speechSynthesis.speak(speech);
}
//Html Elements
function myData(data){
  let myHtmlElements = ` <li class = "item">
  <i class="fa fa-trash cancelBtn" onclick = "this.parentElement.style.display ='none';"></i>
  <span class="content">
  ${data}
  </span>
  </li>`; 
  
  let ElementPosition = 'beforeend';
  
  listContainer.insertAdjacentHTML(ElementPosition, myHtmlElements);
  Input.value = "";
  Input.focus();
  return data;

}

//Form
form.addEventListener('submit', (f) =>{
  f.preventDefault();
myData(Input.value);
})
// strike out


//SpeechRecognition Section
recorder.onstart = () =>{
console.log("voice activated");
}
recorder.onresult = (e) =>{
let resultIndex = e.resultIndex;
 transcript = e.results[resultIndex][0].transcript;
assistant(transcript);
}
recorder.onend = () =>{
 console.log('Voice out');
}
voice.addEventListener('click', () =>{
recorder.start();
})
