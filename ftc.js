function changeBorder(){
    setInterval(changing(),100)
}

function changing(){
    setInterval('document.getElementById("mybd").style = "border-color: red;"',100)
    setInterval('document.getElementById("mybd").style = "border-color: orange;"',200)
    setInterval('document.getElementById("mybd").style = "border-color: yellow;"',300)
    setInterval('document.getElementById("mybd").style = "border-color: green;"',400)
    setInterval('document.getElementById("mybd").style = "border-color: cyan;"',500)
    setInterval('document.getElementById("mybd").style = "border-color: blue;"',600)
    setInterval('document.getElementById("mybd").style = "border-color: purple;"',700)
}
changeBorder();
