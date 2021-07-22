var a = document.getElementById("a");
var b = document.getElementById("b");
var sum = document.getElementById("sum");
var calci = document.getElementById("calc");
var sum = document.getElementById("sum")
var subtract = document.getElementById("subtract")
var multilpy = document.getElementById("multiply")
var div = document.getElementById("div")


var add = function(event){
    if (!a.value || !b.value){
        alert("please enter something bish")
    }
    else{
        var x = parseFloat(a.value);
        var y = parseFloat(b.value);
        sum.innerText = " sum = "+ (x+y)
        subtract.innerText = " subtract = "+ (x-y)
        multilpy.innerText = " multiply = " + (x*y)
        div.innerText = " div = "+ (x/y)

    }
    event.preventDefault()
}

calci.addEventListener("submit",add)
calci.addEventListener("submit",subtract)