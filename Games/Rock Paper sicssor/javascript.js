let choices = document.querySelectorAll(".choices");
let game = document.querySelector(".game");
let User =0;
let Computer =0;
const compScore = document.querySelector(".comp-score");
const userScore =document.querySelector(".user-score");


let comchoice = () =>{
    const options=["rock" , "paper" ,"scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

let draw =()=>{
    console.log("draw");
    game.innerText ="Game was Draw. please Play Agian";
    game.style.backgroundColor="black";
}

const  showwinner =(winner , userchoice, computerchoice) => {
    if (winner){ 
        User++;
        userScore.innerText=User;
        console.log("You won!");
        game.innerText =`You Won ${userchoice} beats ${computerchoice}!`;
        game.style.backgroundColor="Green";
    }
    else{
        Computer++;
        compScore.innerText=Computer;
        console.log("you lose!");
        game.innerText =`You lose ${computerchoice} beats ${userchoice}!`;
        game.style.backgroundColor="red";
    }

};

let playgame = (userchoice)=>{
    console.log("userChoice=", userchoice );
    let computerchoice= comchoice ();
    console.log("computer choice =", computerchoice);
   if (userchoice === computerchoice){
    draw();
   }
    else{
        let  winner =true;
        if( userchoice ==="paper"){
           winner = computerchoice === "rock" ? true: false;
        }
        else if(userchoice ==="rock"){
            winner = computerchoice === "scissor" ? true: false;
        }
        else if (userchoice ==="scissor"){
            winner = computerchoice === "paper" ? true:false;

        }
        showwinner(winner , userchoice, computerchoice);
        }

    

};


choices.forEach((choices)=>{
 choices.addEventListener("click", ()=>{
    let userchoice =choices.getAttribute("id")
    playgame(userchoice)
 });
});


