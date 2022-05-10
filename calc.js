var bAdd = document.getElementById("add");
var bSubt = document.getElementById("subt");
var bMult = document.getElementById('mult');
var fNum = document.getElementById("fNum");
var sNum = document.getElementById("sNum");
var display = document.getElementById("display");

function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mul(a, b){
    return a * b;
}

function getNum(){
    var ftNum = parseFloat(fNum.value), scNum = parseFloat(sNum.value);
    return {ftNum, scNum};
}

function emptyVal(){
    return fNum.value = "", sNum.value = ""
}

function addS() {
    let nums = getNum();
    let firstNum = nums.ftNum, secondNum  = nums.scNum;
    display.innerHTML = add(firstNum, secondNum);
    emptyVal();
}

function subt(){
    let nums = getNum();
    let firstNum = nums.ftNum, secondNum  = nums.scNum;
    display.innerHTML = sub(firstNum, secondNum);
    emptyVal();
}

const muly = () => {
    let nums = getNum();
    let firstNum = nums.ftNum, secondNum  = nums.scNum;
    display.innerHTML = mul(firstNum, secondNum);
    emptyVal();
}

bAdd.addEventListener("click", addS);
bSubt.addEventListener("click", subt);

bMult.addEventListener("click", muly);

