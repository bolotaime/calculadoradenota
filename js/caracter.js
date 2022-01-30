var foo = document.querySelector(".entrada");

//Cria uma função que será usando no keyup e no blue
var f = maxNumber(10);

foo.addEventListener('keyup', f);

function maxNumber(max){
    if(parseFloat(this.value>max)){
        return 10;
    }else{
        return this.value;
    }
}