var my_qoute=document.getElementById("qoute");
var arr=["“You only live once, but if you do it right, once is enough.”",
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
"“A room without books is like a body without a soul.”",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
"“So many books, so little time.”",
"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
"“In three words I can sum up everything I've learned about life: it goes on.”",
"“Be the change that you wish to see in the world.”",
"“If you tell the truth, you don't have to remember anything.”"];
let generatedNumbers = [];



function randomize(){
if( generatedNumbers.length===arr.length){
    generatedNumbers=[] 
}
    do {
        randomNumber = Math.floor(Math.random()*arr.length);;
      } while (generatedNumbers.includes(randomNumber));
   
      generatedNumbers.push(randomNumber);
my_qoute.innerHTML=arr[randomNumber];

}




