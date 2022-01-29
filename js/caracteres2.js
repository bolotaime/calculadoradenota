var foo = document.querySelector(".entrada2");

//Cria uma função que será usando no keyup e no blue
var f = maxNumber(10);

foo.addEventListener('keyup', f);
foo.addEventListener('blur', f);

function maxNumber(max)
{
    var running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 10 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 10;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}