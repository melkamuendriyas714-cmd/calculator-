function addNbumber(){
    let fnum= Number(document.adder.num1.value);
    let snum=Number(document.adder.num2.value);
    let sum=fnum+snum;
    document.adder.result.value=sum;
}

function subNumber(){
       let fnum= Number(document.adder.num1.value);
    let snum=Number(document.adder.num2.value);
    
    let sub=fnum-snum;

   document.adder.result.value=sub;
}

function multiplication(){
    let fnum=Number(document.adder.num1.value);
    let snum=Number(document.adder.num2.value);

    let Multiplication=fnum*snum;

    document.adder.result.value=Multiplication;
}

function division(){
    let fnum=Number(document.adder.num1.value);
    let snum=Number(document.adder.num2.value);

    if (snum==0){
       document.adder.result.value = "";
                alert("Cannot divide by zero!");
                return;
    }

    let div=fnum/snum;
    document.adder.result.value=div
}