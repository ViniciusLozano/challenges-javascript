// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World")



//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const soma = firstNumber + secondNumber

alert(soma)



//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, 
//exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let z = prompt("digite um numero")

  if (!isNaN(z)) {
    alert("It's a number")
  } else {
    alert("isn't a number")
  }




//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
//exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const y = 'Isso é uma string'

  if (typeof y == `string`) {
    alert("It's a String")
  } else {
    alert("It's not a String")
  }



//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, 
//exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const x = true

  if (typeof x == `boolean`) {
    alert("It's Boolean")
  } else {
    alert("It's not boolean")
  }



//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
  let nOne = prompt('Digite o primeiro numero')
  let nTwo = prompt('Digite o segundo numero')

  nOne = Number(nOne)
  nTwo = Number(nTwo)

  const sub = nOne - nTwo

  alert(`O resultado da subtração é ${sub}`) 



//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
  let numberOne = prompt('Digite o primeiro numero')
  let numberTwo = prompt('Digite o segundo numero')

  numberOne = Number(numberOne)
  numberTwo = Number(numberTwo)

  const mult = numberOne * numberTwo

  alert(`O resultado da multiplicação é ${mult}`)



//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
  let One = prompt('Digite o primeiro numero')
  let Two = prompt('Digite o segundo numero')

  One = Number(One)
  Two = Number(Two)

  const div = One / Two

  alert(`O resultado da multiplicação é ${div}`)



//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba 
//a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

  let numero = prompt("Digite um numero");
  let final = numero/2;
  if(numero % 2 == 0){
    alert("É Par");
  }else{
    alert("O numero não é par");
  }


    
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba 
//a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
  let n = prompt("Digite um numero");
  let total = n/2;
  if(n % 2 != 0){
    alert("É Impar");
  }else{
    alert("O numero não é Impar");
  }