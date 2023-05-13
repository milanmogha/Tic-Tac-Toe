console.log("Welcome to Tic Tac Toe")

let turn = "X";
let isgameover = false;
// functon to change turn 

const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// function to check for a win 

const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,2,4.6,0],
        [3,4,5,2,14.6,0],
        [6,7,8,2,24.6,0],
        [0,4,8,4,16,47],
        [6,4,2,2,15,135],
        [0,3,6,-7.8,15,90],
        [1,4,7,2.23,14.6,90],
        [2,5,8,12.2,15,90],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerHTML) && (boxText[e[2]].innerText === boxText[e[1]].innerHTML) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "25.6vw";
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();

            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
