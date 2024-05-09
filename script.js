
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

let counter = 1;
let p1Counter = 0;
let p2Counter = 0;

function changeButton(id) {
    const button = document.getElementById(id);
    if (counter % 2 === 1) {
        button.innerHTML = 'X';
    } else {
        button.innerHTML = 'O';
    }
    counter++;
    checkWinner();
}

function checkWinner() {
    const b1 = document.getElementById('b1').innerHTML;
    const b2 = document.getElementById('b2').innerHTML;
    const b3 = document.getElementById('b3').innerHTML;
    const b4 = document.getElementById('b4').innerHTML;
    const b5 = document.getElementById('b5').innerHTML;
    const b6 = document.getElementById('b6').innerHTML;
    const b7 = document.getElementById('b7').innerHTML;
    const b8 = document.getElementById('b8').innerHTML;
    const b9 = document.getElementById('b9').innerHTML;

    if ((b1 === "X" && b2 === "X" && b3 === "X") || 
        (b4 === "X" && b5 === "X" && b6 === "X") || 
        (b7 === "X" && b8 === "X" && b9 === "X") || 
        (b1 === "X" && b4 === "X" && b7 === "X") || 
        (b2 === "X" && b5 === "X" && b8 === "X") || 
        (b3 === "X" && b6 === "X" && b9 === "X") || 
        (b1 === "X" && b5 === "X" && b9 === "X") || 
        (b3 === "X" && b5 === "X" && b7 === "X")) {
            console.log("condition1 cheked");
        p1Counter++;
        display1.innerHTML = "frgrthtr";
        return;
    }
    
    if ((b1 === "O" && b2 === "O" && b3 === "O") || 
        (b4 === "O" && b5 === "O" && b6 === "O") || 
        (b7 === "O" && b8 === "O" && b9 === "O") || 
        (b1 === "O" && b4 === "O" && b7 === "O") || 
        (b2 === "O" && b5 === "O" && b8 === "O") || 
        (b3 === "O" && b6 === "O" && b9 === "O") || 
        (b1 === "O" && b5 === "O" && b9 === "O") || 
        (b3 === "O" && b5 === "O" && b7 === "O")) {
            console.log("condition1 cheked");
        p2Counter++;
        display2.innerHTML= p2Counter;
        return;  
        
    }
}


    function reset() {
        document.getElementById('b1').innerHTML="";
        document.getElementById('b2').innerHTML="";
        document.getElementById('b3').innerHTML="";
        document.getElementById('b4').innerHTML="";
        document.getElementById('b5').innerHTML="";
        document.getElementById('b6').innerHTML="";
        document.getElementById('b7').innerHTML="";
        document.getElementById('b8').innerHTML="";
        document.getElementById('b9').innerHTML="";
        counter=1;
        }
    