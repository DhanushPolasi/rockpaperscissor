
function ask(){
    var year = prompt('What is your year of birth..?');
    var indays = (2020 - year) * 365;
    var h2= document.createElement('h2');
    var result= document.createTextNode('You are ' + indays + ' days old!!');
    h2.setAttribute('id', 'answer');
    h2.appendChild(result);
    document.getElementById('result').appendChild(h2);
}
function reset(){
    document.getElementById('answer').remove();
}

function rpsGame(yourchoice){
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice = botweapon(botnum());
    alert(botchoice);
    score= decidewinner(humanchoice,botchoice);
    console.log(score);
}

//botchoice func
function botnum(){
    return Math.floor(Math.random()*3);
}

function botweapon(number){
    return  ['rock','paper','scissor'][number];
}
//ends

//decide winner func


function decidewinner(playerchoice,computerchoice){
    var scoring = {
      'rock':{'rock':0.5,'paper':0, 'scissor':1},
      'paper':{'rock':1, 'paper':0.5, 'scissor':0},
      'scissor':{'rock':0,'paper':1,'scissor':0.5},
    };
    
    var yourscore= scoring[playerchoice][computerchoice];
    var botscore= scoring[botchoice][playerchoice];

    return [yourscore,botscore];
}

