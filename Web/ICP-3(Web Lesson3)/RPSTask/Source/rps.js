var userValue;
var computerValue = Math.random();
var div ;
if (computerValue < 0.33) {
    computerValue = "r";
} else if (computerValue > 0.66) {
    computerValue = "p";
} else {
    computerValue = "s";
}
function userinput(input) {
    userValue = input;
    rsp();
}

function rsp(){
    div =  document.getElementById('result');
    if(computerValue == userValue){
        if(computerValue == 'r'){
            div.innerHTML = 'You and Computer have selected the same value Rock - Tie!';
            return false;
        }
        if(computerValue == 'p'){
            div.innerHTML = 'You and Computer have selected the same value paper - Tie!';
            return false;
        }
        if(computerValue == 's'){
            div.innerHTML = 'You and Computer have selected the same value Scissors- Tie!';
            return false;
        }
    }

    if((computerValue=='r'&&userValue=='p')||(userValue=='r'&&computerValue=='p')){
        if(userValue == 'p'){
            div.innerHTML = 'User wins . Hurray! Computer selected rock';
        }else{
            div.innerHTML = 'Computer wins it choose paper';
        }
    }
    if((computerValue=='s'&&userValue=='p')||(userValue=='s'&&computerValue=='p')){
        if(userValue == 's'){
            div.innerHTML = 'User wins . Hurray! Computer selected paper';
        }else{
            div.innerHTML = 'Computer wins. User selected paper';
        }
    }
    if((computerValue=='s'&&userValue=='r')||(userValue=='s'&&computerValue=='r')){
        if(userValue == 'r'){
            div.innerHTML = 'User wins. Hurray! Computer selected paper';
        }else{
            div.innerHTML = 'Computer wins user selected paper';
        }
    }
}
