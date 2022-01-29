function somarValores(){ 
    var a1 = document.getElementById("ponto1").value; // nota da avaliação 1(A1)
    var a2 = document.getElementById("ponto2").value; // nota da avaliação 2(A2)
    var a3 = document.getElementById("ponto3").value; // nota da avaliação 3(A3)
    var soma1 = parseFloat(a1) + parseFloat(a2) + parseFloat(a3); // calculo somando as 3 notas das 3 avaliações pra dar o valor da Nota 1(N1)
    var media1 = 3; // evidenciando a quantidade de notas que tem dentro da N1
    var proporcao1 = 0.4; // evidenciando o peso da N1
    var divisao1 = parseFloat(soma1) / media1; // fazendo a média da N1 (somando A1+A2+A3 [soma1] / 3 [media1])
    var multiplicacao1 = parseFloat(divisao1) * proporcao1; // pegando a média (divisao1) das notas e multiplicando pelo peso - [(A1+A2+A3)/3]*0.4
    var a4 = document.getElementById("ponto9").value; //nota da avaliação 4
    var a5 = document.getElementById("ponto").value; //nota da avaliação 5
    var soma2 = parseFloat(a4) + parseFloat (a5); // soma das notas A4 e a5 pra calcular a Nota 2(N2)
    var proporcao2 = 0.6; // peso da N2
    var multiplicacao2 = parseFloat(soma2) * proporcao2; // na N2 nao é necessario fazer média, apenas somar A4+A5 e multiplicar pelo peso
    var soma3 = parseFloat(multiplicacao1) + parseFloat(multiplicacao2); // depois somar as duas notas N1+N2
    var diferença = 6 - parseFloat(soma3);
    if (soma3 >= 6){ // se soma3 /\ (calculo da var acima) for maior ou igual a 6, vai aparecer o alerta de aprovado abaixo
        document.getElementById("result").innerHTML = "Aprovado! <br> Sua média final é " + soma3 + "." // esse alerta se a soma3 for maior ou igual a 6
    } else { //else seria "se nao for aquilo, vai ser isso", nesse caso: se nao for maior ou igual a 6, vai ser reprovado)
    document.getElementById("result").innerHTML = "Reprovado =( <br> Você precisa tirar " + diferença + " na prova final." // se a nota for menor q 6 o alerta vai ser reprovado
    }
}