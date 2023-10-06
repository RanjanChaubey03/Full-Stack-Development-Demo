let score =JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
    losses: 0,
    ties: 0
};  

console.log(score);



function resetGame(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement();
}


function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove==='Scissor'){
        if(computerMove==='Rock'){
            result='You lose';
        }
        else if(computerMove==='Paper'){
            result='You win';
        }
        else if(computerMove==='Scissor'){
            result='Tie';
        }
    }
    if(playerMove==='Rock'){
        if(computerMove==='Rock'){
            result='Tie';
        }
        else if(computerMove==='Paper'){
            result='You lose';
        }
        else if(computerMove==='Scissor'){
            result='You win';
        }
    }
    if(playerMove==='Paper'){
        if(computerMove==='Rock'){
            result='You win';
        }
        else if(computerMove==='Paper'){
            result='Tie';
        }
        else if(computerMove==='Scissor'){
            result='You lose';
        }
    }
    if(result==='You win'){
        score.wins+=1;
    }
    else if (result==='You lose'){
        score.losses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.js-result').innerHTML=result;

    

    document.querySelector('.js-moves').innerHTML = `You
<img src="images/rock-paper-scissors-${playerMove}.png" class="move-icon">
<img src="images/rock-paper-scissors-${computerMove}.png" class="move-icon">
Computer`;
    
    alert(`Your move : ${playerMove}, computer Move : ${computerMove}, Result: ${result} 
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);

}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissor';
    }
    return computerMove;
}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}