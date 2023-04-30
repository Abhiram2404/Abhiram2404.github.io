
armstrong();

function factorial() {
    let name = "factorial";
    document.getElementById("name").innerHTML = name;
    var number = document.getElementById("number").value;
    let f = 1;
    for (let i = 1; i <= number; i++) {
        f = f * i;
    }
    console.log(f);
    document.getElementById("out").innerHTML = f;
    document.getElementById("number").value = null;
}

function armstrong() {
    let name = "armstrong";
    document.getElementById("name").innerHTML = name;
    // var num1 = document.getElementById("number").value;
    var num1 = 153;

    let temp = num1;
    let s = 0;
    let result = "";
    while (num1 > 0) {
        let rem = num1 % 10;
        s = (s) + (rem * rem * rem);
        num1 = parseInt(num1/10);
    }

    if (s == temp) {
        result = temp + " is armstrong";
    }
    else {
        result = temp + " is armstrong";
    }
    // document.getElementById("out").innerHTML = result;
    // document.getElementById("number").value = null;
    console.log(result);
}


function fibinochi() {
    let name = "fibinochi";
    document.getElementById("name").innerHTML = name;
    var num1 = document.getElementById("number").value;
    let result = 0;
    function fib(num1) {
        if (num1 == 0) {
            return 0;
        }
        else if (num1 == 1 || num1 == 2) {
            return 1;
        }
        else {
            return fib(num1 - 2) + fib(num1 - 1);
        }
    }
    result = fib(num1);
    console.log(result);
    document.getElementById("out").innerHTML = result;
    document.getElementById("number").value = null;

}

function strong() {
    let name = "factorial";
    document.getElementById("name").innerHTML = name;
    var number = document.getElementById("number").value;
    let s = 0;
    let temp = number;
    let result = "";
    while (number > 0) {
        let rem = number % 10;
        s = (s) + (fact(rem));
        number = parseInt(number/10);
    }
    function fact(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
    if (s == temp) {
        result = temp + " is a Strong";
    }
    else {
        result = temp + " is a Strong";
    }
    document.getElementById("out").innerHTML = result;
    document.getElementById("number").value = null;
}