/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  //Sua logica deve ser inserida aqui:

  // Verificando se a distância mínima foi alcançada pela pessoa
  if(distance >= 24000){
    // Verificando se o gênero é masculino
    if(gender === "male"){
      // Verificando se as exigências mínimas para aqueles do gênero masculino foram compridas
      if(time < 720 && pushUps >= 30 && abs >= 35)
        passed = true;
    // Verificando se o gênero é feminino
    }else if(gender === "female"){
      // Verificando se as exigências mínimas para aqueles do gênero feminino foram compridas
      if(time < 840 && pushUps >= 20 && abs >= 30)
        passed = true;
    }
  }

  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
