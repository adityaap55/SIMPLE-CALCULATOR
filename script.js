function clearScreen() {
    document.getElementById("result").value = "";
}
 
function disp(value) {
    document.getElementById("result").value += value;
}

function calc() {
    var input1 = document.getElementById("result").value;
    var input2 = eval(input1);
    document.getElementById("result").value = input2;
}