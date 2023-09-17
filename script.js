function loveCal(){
let userName = prompt("What is your name?");
while(!userName){
   userName = prompt("Add a name..")
}
let otherUserName = prompt("What is their name?");
while(!otherUserName){
    otherUserName = prompt("Add a name..")
 }
let age = prompt("How old are you?");
while(!age){
    age = prompt("How old are you?..")
 }
let ageOfOtherUser = prompt("What is their age?");
while(!ageOfOtherUser){
    ageOfOtherUser = prompt("Put their age...")
 }

let loveCalcul = Math.random() * 100;
loveCalcul = Math.floor(loveCalcul) + 1; 

if(loveCalcul > 65){
   document.getElementById("loveResult").innerHTML = "Dear " + userName + " Your score is " + loveCalcul + "%." + "You both make a wonderful couple, just keep working and exploring yourself";

}else{
    document.getElementById("loveResult").innerHTML = "Dear " + userName + " Your score is " + loveCalcul + "%" + "There are more people out there who would love to be with you. Don't give up on love";
}

}
