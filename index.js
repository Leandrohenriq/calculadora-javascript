function calcular(){
    
let num1 = Number(document.getElementById('num1').value)
let num2 = Number(document.getElementById('num2').value)
let total = 0

if(document.getElementById('adicao').checked){
    total = num1 + num2
}
else if(document.getElementById('subtracao').checked){
    total = num1 - num2
}
else if(document.getElementById('multiplicacao').checked){
    total = num1 * num2
}
else{
    total = num1 / num2
}

document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total)

}
