function addAv(){
    var node = document.createElement("div");
    node.className = "av";

    var pAv = document.createElement("p");

    var countAv = document.getElementById("conteudo").getElementsByClassName("av").length;
    countAv++;
    pAv.innerHTML = "Av "+countAv;
    //node.id = "maiscaixa";  ideia do jarthur

    var numAv = document.createElement("input");
    numAv.type = "number";
    numAv.id = "ponto"+countAv;
    numAv.className = "entrada";

    node.appendChild(pAv);
    node.appendChild(numAv);

    document.getElementById("conteudo").appendChild(node);
}

function removeAv(){
    console.log("entrei");
    var ultimoAv = document.getElementById("conteudo").childNodes.length;
    ultimoAv--;

    if(ultimoAv == 1){
        alert("Jumento, tem queter pelo menos uma avaliação");
        return
    }

    document.getElementById("conteudo").removeChild(document.getElementById("conteudo").childNodes[ultimoAv]);
}
