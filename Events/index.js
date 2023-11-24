function fristOnClick() {
    const frist =  document.getElementById("name").value;
    const last =  document.getElementById("name-2").value;
}

function numbers() {
    const number1 =  parseInt(document.getElementById("n-1").value);
    const number2 =  parseInt(document.getElementById("n-2").value);

    if(number1<number2) {
        dis = console.log("number 2");
        dis = "Number 2";
    }else if(number1==number2) {
        dis = console.log("Same Numbers");
        dis = "Same Number";
    }else {
        dis = console.log("number 1");
        dis = "Number 1";
    }

    document.getElementById("NumberDis").innerText = dis;
    // console.log(dis);
}

function numberSum() {
    const number3 =  document.getElementById("num-4").value;
    let sum = 0;

    for(let i=1; i<number3.length; i++) {
        sum = sum + parseInt(number3[i]);
    }
    document.getElementById("NumberDisplay").innerText = sum;

}
