let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = (numberOne + numberTwo)
let sub = (numberOne - numberTwo)
let mult = (numberOne * numberTwo)
let div = (numberOne / numberTwo)
let restDiv = (numberOne % numberTwo)
let restSum = sum

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div.toFixed(1)}`)
alert(`A resto da divisão dos dois números é: ${restDiv}`)

if(restSum % 2 == 0 && numberOne == numberTwo){
  alert(`A soma dos dois numeros é par: ${sum}`)
  alert(`Os números inseridos ${numberOne} e ${numberTwo} são iguais:`)
}else if(restSum % 2 == 0 && numberOne !== numberTwo){
  alert(`A soma dos dois numeros é par: ${sum}`)
  alert(`Os números inseridos ${numberOne} e ${numberTwo} são diferentes:`)
}else{
  alert(`A soma dos dois numeros é ímpar: ${sum}`)
  alert(`Os números inseridos ${numberOne} e ${numberTwo} são diferentes:`)
}