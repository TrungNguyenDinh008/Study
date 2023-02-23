function LoveScore(){
prompt("What is your name?");
prompt("What is their name?");
var LS=Math.random();
var LS=Math.floor(LS*100+1);
alert("Your love score is " + LS + "%");
var SUB=confirm("Do you want to do it again?");
if(SUB == true){
    LoveScore();
} else {
    alert("Bye");
}
}
LoveScore();
