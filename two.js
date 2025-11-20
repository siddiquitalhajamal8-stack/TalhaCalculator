let num = 0;

function increase(){
    num = num + 1;
    document.getElementById("number").innerText=num;
}

function decrease(){
    num = num - 1;
    document.getElementById("number").innerText=num;
}

function reset(){
    num = 0;
    document.getElementById("number").innerText=num;
}