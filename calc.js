let firstVal= document.getElementById("input1").value
let tag;
let answer;
let zero = Number(0)
console.log(firstVal= document.getElementById("input1").value)
let val= document.getElementById("input").value
function number(numb){
    document.getElementById("input").value +=numb 
}
function empty(zero){
    document.getElementById("input").value = zero
}
function empty1(clear){
    document.getElementById("input").value = clear
    document.getElementById("input1").value = clear
    tag = clear

}
function back(remove){
  let second =document.getElementById("input").value.toString()
  let real;
  real= second.slice(0, -1)
  document.getElementById("input").value = Number(real)
}
function operator(sign= "+" || "-" || "*" || "/" || "$" || "^", num){
    
    if (tag != sign && firstVal == false && val >=0){
    tag=sign
    console.log(tag=sign)
    document.getElementById("input1").value = document.getElementById("input").value  
    document.getElementById("input").value = num
    console.log(firstVal= document.getElementById("input1").value)
    }
    else if(tag=="+" && firstVal >=0 && val >=0 ){
    let result = Number(firstVal= document.getElementById('input1').value) + Number(document.getElementById("input").value)
    document.getElementById("input1").value = result
    document.getElementById("input").value = num
    }
    else if(tag=="-" && firstVal >=0 && val >=0 ){
    let result = Number(firstVal= document.getElementById('input1').value) - Number(document.getElementById("input").value)
    document.getElementById("input1").value = result
    document.getElementById("input").value = num
    }
    else if(tag=="*" && firstVal >=0 && val >=0 ){
    let result = Number(firstVal= document.getElementById('input1').value) * Number(document.getElementById("input").value)
    document.getElementById("input1").value = result
    document.getElementById("input").value = num
    }
    else if(tag=="/" && firstVal >=0 && val >=0 ){
    let result = Number(firstVal= document.getElementById('input1').value) / Number(document.getElementById("input").value)
    document.getElementById("input1").value = result
    document.getElementById("input").value = num
    } 
    
    tag=sign
    console.log(tag=sign)
     
}
function reciprocate(){
  answer = 1 / document.getElementById("input").value
  document.getElementById("input").value = answer
}
function square(){
  answer = document.getElementById("input").value * document.getElementById("input").value
  document.getElementById("input").value = answer
}
function changeSign(){
  if (tag=="+"){
    tag = "-"
  }
  else if (tag=="-"){
    tag = "+"
  }
}
function solve(){
    console.log(val= document.getElementById("input").value)
    if (tag=="+"){
    let result = Number(firstVal= document.getElementById('input1').value) + Number(document.getElementById("input").value)
    document.getElementById("input").value = result
    }
    else if (tag=="-"){
    let result = Number(firstVal= document.getElementById('input1').value) - Number(document.getElementById("input").value)
    document.getElementById("input").value = result
    }
    else if (tag=="*"){
    let result = Number(firstVal= document.getElementById('input1').value) * Number(document.getElementById("input").value)
    document.getElementById("input").value = result
    }
    else if (tag=="/"){
    let result = Number(firstVal= document.getElementById('input1').value) / Number(document.getElementById("input").value)
    document.getElementById("input").value = result
    }
    else if (tag=="^"){
    let result = Number(firstVal= document.getElementById('input1').value) * Number(firstVal= document.getElementById('input1').value)
    document.getElementById("input").value = result
    }

}

