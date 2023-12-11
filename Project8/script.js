let userScore =0;
let computerScore =0;


const generateCompChoice =()=>{
    let choices =["rock" ,"paper" ,"scissor"];
    
    let choice = Math.floor(Math.random()*3);

    return choices[choice];

}

const game =(userChoice)=>{
    const compChoice = generateCompChoice();
    
    if(compChoice===userChoice){
        document.getElementById("display").innerHTML="Draw";
    }
    // ---------------------------------condition1---------------------------------
    if(compChoice==="rock" && userChoice==="scissor"){
        document.getElementById("display").innerHTML="Computer Wins";
        computerScore=computerScore+1;
        document.getElementById("computer_Score").innerHTML=computerScore;
    }
    else if(compChoice==="rock" && userChoice==="paper"){
        document.getElementById("display").innerHTML="You Win";
        userScore=userScore+1;
        document.getElementById("human_Score").innerHTML=userScore;
    }

    // ---------------------------------condition2---------------------------------


    
    else if(compChoice==="scissor" && userChoice==="rock"){
        document.getElementById("display").innerHTML="You Win";
        userScore=userScore+1;
        document.getElementById("human_Score").innerHTML=userScore;
    }

    else if(compChoice==="scissor" && userChoice==="paper"){
        document.getElementById("display").innerHTML="Computer Win";
        computerScore=computerScore+1;
        document.getElementById("computer_Score").innerHTML=computerScore;
    }

    // ---------------------------------condition3---------------------------------

    else if(compChoice==="paper" && userChoice==="rock"){
        document.getElementById("display").innerHTML="Computer Wins";
        computerScore=computerScore+1;
        document.getElementById("computer_Score").innerHTML=computerScore;
    }

    else if(compChoice==="paper" && userChoice==="scissor"){
        document.getElementById("display").innerHTML="You Win";
        userScore=userScore+1;
        document.getElementById("human_Score").innerHTML=userScore;
    }

}



let choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")

        game(userChoice);
    })
    
})


