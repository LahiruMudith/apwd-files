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

// function Position() {
    
//     const text = document.getElementById("text"); 

//     if (text=="intern") {
//         console.log("Intern Software engineer");
//     }else if (text=="ase") {
//         console.log("Associate Software engineer");
//     }else if (text=="se") {
//         console.log("Software engineer");
//     }else if (text=="sse") {
//         console.log("Senior Software engineer");
//     }else if (text=="alt") {
//         console.log("Assistant Tech Lead");
//     }else if (text=="tl") {
//         console.log("Tech Lead");
//     }else  {
//         console.log("Erro key words...!");
//     }
// }

function save() {
    const input = document.getElementById("input").value
    
    
    
    for (const i = 1; i<100; i++ ) {
        inputsArray.push(input)
        console.log("Added"  +" "+ input);
        document.getElementById("InputDisplay").innerHTML = input
    }
}

function LoadAll(){
    // const intArray = inputs
    document.getElementById("InputDisplay").innerHTML = inputsArray
}

function savedata() {
   const name =  document.getElementById("name").value.toUpperCase();
   const password =  document.getElementById("password").value.toUpperCase();

    if (name == "LAHIRU" && password==1234){
        document.getElementById("Data").innerHTML = "Login Successfully !"
    }else {
        document.getElementById("Data").innerHTML = "Login Fail !"
    }

}


const inputNumber =  document.getElementById("inputNumber").value
const dividNum = []
const genaratenum = []


for (let k=0; k<50; k++){
    let x = Math.floor(Math.random() * 100);
    genaratenum[k] = x;



}
console.log(genaratenum);
document.getElementById("gNum").innerHTML = genaratenum;


function LoadAllNum() {
    const inputNumber =  document.getElementById("inputNumber").value
    
    for (let i = 0; i<50; i++) {
       
        if (inputNumber / genaratenum[i] == 1){
            dividNum[i] = genaratenum[i]
        }
    }

document.getElementById("Num").innerHTML = dividNum;
}



