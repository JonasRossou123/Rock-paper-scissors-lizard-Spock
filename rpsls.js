(function() {

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const lizard = document.getElementById('lizard');
    const spock = document.getElementById('spock');

    const reset = document.getElementById('reset')

    const opponent = document.getElementById('opponent');

    const answeroppo = document.getElementById('answeroppo');
    const answerplayer = document.getElementById('answerplayer');

    const oppochoose = ["rock", "paper", "scissors", "lizard","spock"]

    let answer = ""

    rock.addEventListener("click", () => {
        answerplayer.innerHTML = "rock";
        answer = "rock";
        console.log(answer);
    })


    paper.addEventListener("click", () => {
        answerplayer.innerHTML = "paper";
        answer = "paper";
        console.log(answer);
    })

    scissors.addEventListener("click", () => {
        answerplayer.innerHTML = "scissors";
        answer = "scissors";
        console.log(answer);
    })

    lizard.addEventListener("click", () => {
        answerplayer.innerHTML = "lizard";
        let answer = "lizard";
        console.log(answer);
    })

    spock.addEventListener("click", () => {
        answerplayer.innerHTML = "spock";
        answer = "spock";
        console.log(answer);
    })

    let result = ""

    opponent.addEventListener("click", () => {

    let random = oppochoose[Math.floor(Math.random() * oppochoose.length)]
    answeroppo.innerHTML = random

    if (answer === "rock"){
        if (random === "rock"){
            result = "tie";
        }
        else if (random === "paper"){
            result = "you lose";
        }
        else if (random === "scissors"){
            result = "you win";
        }
        else if (random === "lizard"){
            result = "you win";
        }
        else if (random === "spock"){
            result = "you lose";
        }
    }

    else if (answer === "paper"){
        if (random === "rock"){
            result = "you win"
        }
        else if (random === "paper"){
            result = "tie"
        }
        else if (random === "scissors"){
            result = "you lose"
        }
        else if (random === "lizard"){
            result = "you lose"
        }
        else if (random === "spock"){
            result = "you win"
        }
    }
    else if (answer === "scissors"){
        if (random === "rock"){
            result = "you lose"
        }
        else if (random === "paper"){
            result = "you win"
        }
        else if (random === "scissors"){
            result = "tie"
        }
        else if (random === "lizard"){
            result = "you win"
        }
        else if (random === "spock"){
            result = "you lose"
        }
    }
    else if (answer === "lizard"){
        if (random === "rock"){
            result = "you lose"
        }
        else if (random === "paper"){
            result = "you win"
        }
        else if (random === "scissors"){
            result = "you lose"
        }
        else if (random === "lizard"){
            result = "tie"
        }
        else if (random === "spock"){
            result = "you win"
        }
    }
    else if (answer === "spock"){
        if (random === "rock"){
            result = "you win"
        }
        else if (random === "paper"){
            result = "you lose"
        }
        else if (random === "scissors"){
            result = "you win"
        }
        else if (random === "lizard"){
            result = "you lose"
        }
        else if (random === "spock"){
            result = "tie"
        }
    }

    if (result === "you lose"){
        document.body.style.background = "red"}
        else if (result === "tie"){
            location.reload()
    }
        else if (result === "you win"){
        document.body.style.background = "green"
    }
        })

    reset.addEventListener("click", () => {
        location.reload()
    })

})();