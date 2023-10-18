/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

const distance = 25000;
const time = 710;
const gender = "male";
const pushUps = 40;
const abs = 35;

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

  // Inicializando os limites inferiores/superiores dos valores de acordo com o gênero MASCULINO
  let distanceCap = 24000;
  let timeCap = 720; // 12 minutos * 60 segundos
  let pushUpsCap = 30;
  let absCap = 35;

  // Verificação 1
  // Caso o gênero seja FEMININO, os limites precisam ser ajustados
  if(gender === "female"){
    timeCap = 840; // 14 minutos * 60 segundos
    pushUpsCap = 20;
    absCap = 30;
  }

  // Verificação 2
  // Caso os valores dados estejam dentro do esperado de acordo com o gênero da pessoa: ela PASSA!
  // Caso contrário: ela NÃO PASSA!
     // A distância percorrida precisa ser PELO MENOS (>=) 2400 metros
  if(distance >= distanceCap &&
      // O tempo levado para percorrer a distância precisa ser MENOR (<) que 12 ou 14 minutos
      time < timeCap &&
      // A quantidade MÍNIMA (Inclui o valor em si, então usa-se: >=) de flexões precisa ser 30 ou 20
      pushUps >= pushUpsCap &&
      // A quantidade MÍNIMA (Inclui o valor em si, então usa-se: >=) de abdominais precisa ser 35 ou 30
      abs >= absCap)
    passed = true;

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
