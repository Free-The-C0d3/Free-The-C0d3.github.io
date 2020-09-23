function changeBorder(){
    setInterval(changing(),100)
}

function changing(){
    setInterval('document.getElementById("mybd").style = "border-color: cyan;"',100)
    setInterval('document.getElementById("mybd").style = "border-color: blue;"',200)
}
changeBorder();
