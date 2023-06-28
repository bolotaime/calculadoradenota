function somarValores(){
    var countAv = document.getElementById("conteudo").getElementsByClassName("av").length;
    console.log(countAv);
    var notas1 = [];
    console.log(notas1.length);
    var nota1Valid = false;

    for(var i = 0; i < countAv; i++){
        var nomeAv = "ponto"+(i+1);
        console.log(nomeAv);
        notas1[i] = document.getElementById(nomeAv).value;

        if(notas1[i] != ""){
            nota1Valid = true;
        }
    }

    var a4 = document.getElementById("ponto9").value; //nota da avaliação 4
    var a5 = document.getElementById("ponto").value; //nota da avaliação 5

    if((nota1Valid == false) || (a4 == "" && a5 == "")){
        document.getElementById("result").innerHTML = "Preencha as notas para calcular sua média.";
        return
    }

    var soma1 = 0;
    for(var i = 0; i < notas1.length; i++){
        soma1 = soma1 + parseFloat(notas1[i]); // calculo somando as 3 notas das 3 avaliações pra dar o valor da Nota 1(N1)
    }

    var media1 = notas1.length; // evidenciando a quantidade de notas que tem dentro da N1

    var proporcao1 = 0.4; // evidenciando o peso da N1
    var divisao1 = parseFloat(soma1) / media1; // fazendo a média da N1 (somando A1+A2+A3 [soma1] / 3 [media1])
    var multiplicacao1 = parseFloat(divisao1) * proporcao1; // pegando a média (divisao1) das notas e multiplicando pelo peso - [(A1+A2+A3)/3]*0.4

    if(a5 == ""){
        a5 = 0;
    }

    var soma2 = parseFloat(a4) + parseFloat (a5); // soma das notas A4 e a5 pra calcular a Nota 2(N2)
    var proporcao2 = 0.6; // peso da N2
    var multiplicacao2 = parseFloat(soma2) * proporcao2; // na N2 nao é necessario fazer média, apenas somar A4+A5 e multiplicar pelo peso
    var soma3 = parseFloat(multiplicacao1) + parseFloat(multiplicacao2); // depois somar as duas notas N1+N2
    var diferença = 12 - parseFloat(soma3);
    if (soma3 >= 6){ // se soma3 /\ (calculo da var acima) for maior ou igual a 6, vai aparecer o alerta de aprovado abaixo
        document.getElementById("result").innerHTML = "Aprovado! <br> Sua média final é " + soma3 + "." // esse alerta se a soma3 for maior ou igual a 6
    } else { //else seria "se nao for aquilo, vai ser isso", nesse caso: se nao for maior ou igual a 6, vai ser reprovado)
        document.getElementById("result").innerHTML = "Reprovado =( <br> Você precisa tirar " + diferença + " na prova final." // se a nota for menor q 6 o alerta vai ser reprovado
    } 
}