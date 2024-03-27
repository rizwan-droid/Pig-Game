// This code is for learning js in detail.

var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();



// object that gives access to html elements is query selector
// one method is query selector

// document.querySelector('#current--' + activePlayer).textContent = dice;

//textContent is used to select the text part only if we want to select full html part then we have to use innerHTML method

// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//everytime if you need to add some html part then it should be in string because js thinks that it is js program and throws an error

// var x= document.querySelector('score--0').textContent;
// console.log(x);

//this time we have given any value to show that this textcontent is used to read the value as well. here it will read the value and store it into the variable x.

// document.querySelector('.dice').style.display = 'none';
// to access css use .style and display none is to hide the dice

// function btn(){

// }
// document.querySelector('.btn--roll').addEventListener('click', btn);

//addEventListener is a function which helps us to decide the event like in argument we have click that is event and btn is the callback function which is used in another functions arguments and called by another function.

//another method to queryselector it is faster but only helpful for id
// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
         //1. random number
    var dice = Math.floor(Math.random()*6+1);
    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. Update the roundscore if the rolled number not equal to 1
    if(dice===6 && lastDice ===6){
        scores[activePlayer] = 0;
        document.querySelector('score--' + activePlayer).textContent = "0";
        nextPlayer();

    }else if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }
    else{
        //next player
        nextPlayer();
    }
lastDice = dice;
    
    } 
});
//if we do not want any function outside then we can directly write here in the event listener function and this function is now called anonymous function. and it cannot be reused again because it donot have name.

document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

  // check if player win the game
    if (scores[activePlayer] >= 20){
        gamePlaying = false;
        // document.querySelector('#name--' + activePlayer).textContent = 'winner!'; 
        document.querySelector('.dice').style.display = 'none';
        // document.querySelector('player--'+ activePlayer).classList.add('player--winner');
        // document.querySelector('player--'+ activePlayer).classList.remove('player--active');
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        
    }else{
    //next player
    nextPlayer();
    }
    }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    //toggle simply add the class if it is not there and remove if it is there.

    //document.querySelector('.player--0').classList.remove('player--active');
    //document.querySelector('.player--1').classList.remove('player--active');
    //classList.remove and add is to remove and add the classes in different div

    // document.querySelector('.dice').style.display = "none";
}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.getElementById('name--0').textContent = "player 1"; 
document.getElementById('name--1').textContent = "player 2"; 

document
        .querySelector(`.player--0`)
        .classList.remove('player--winner');
document
        .querySelector(`.player--1`)
        .classList.remove('player--active');
document
        .querySelector(`.player--0`)
        .classList.add('player--active');
document
        .querySelector(`.player--1`)
        .classList.remove('player--active');
}


/* 
CODING CHALLENGE

change the game to follow these rules

1. A player looses his Entire score when he rolls two6 in a row. after that  it is the next player turn.
2. add an input field to the HTML where player can set the winning score, so that  they can change the predefined score of 100.
3. add another dice to the game, so that there are  two dices now. Player looses his current score when one of these is 1.
*/






