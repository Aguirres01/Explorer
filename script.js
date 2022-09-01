
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divi =  firstNumber / secondNumber
const resDiv = firstNumber % secondNumber


alert("Soma:" + sum)
alert("Subtração:" + sub)
alert("Multiplicação:" + multi)
alert("Divisão:" + divi)
alert("Resto da divisão :" + resDiv)

if(sum %2 == 0){
    alert("A soma dos dois números é par")
} else  alert("A soma dos dois números é ímpar")

if (firstNumber == secondNumber){
    alert("Os números são iguais")
} else {
    alert("Os números são diferentes")
}