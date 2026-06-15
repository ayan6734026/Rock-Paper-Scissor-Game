let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".icons_div");
const infotxt = document.querySelector("#text");
const userScorePara = document.querySelector("#userScores");
const compScorePara = document.querySelector("#compScores");

const genCompChoice=()=>{
    let index=Math.floor(Math.random()*3);
    arrIndex=["rock","paper","scissor"];
    let compchoice =arrIndex[index];
    return compchoice;
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice)
    });
});

const draw=()=>{
    console.log("It was draw");
    infotxt.innerText="Draw,Try Again"
    infotxt.classList.remove("losetxt");
    infotxt.classList.remove("txt");
    infotxt.classList.add("txt")
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win!");
        infotxt.innerText="You Win!";
        infotxt.classList.remove("losetxt");
        infotxt.classList.remove("txt");
        infotxt.classList.add("wintxt");
        userScore++;
        userScorePara.innerText=userScore;
        }
    else{
        console.log("You lost!");
        infotxt.innerText="You lost!";
        infotxt.classList.remove("txt");
        infotxt.classList.remove("wintxt");
        infotxt.classList.add("losetxt");
        compScore++;
        compScorePara.innerText=compScore;

    }
}

const playgame=(userchoice)=>{
    console.log("User Choice=",userchoice);
    const compChoice=genCompChoice();
    console.log("Computer Choice=",compChoice);

    if (userchoice===compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            userWin=compChoice === "paper" ? false : true;
        }else if(userchoice==="paper"){
            userWin=compChoice === "scissor" ? false : true;
        }else{
            userWin=compChoice === "rock" ? false : true;
        }
        console.log("useWin=",userWin);
        showWinner(userWin);
    }

}

