function soma(n1=0, n2=0) {
    return n1+n2
}
/*
let res = soma(11, 13)
console.log(res)
*/
console.log(soma(11, 10)) 

/*
Se por acaso eu não colocar um dos parâmetros, o programa irá retorna NaN (undefined).

function soma(n1=0, n2=0) {

}

fzd isso consigo resolver esse problema, o progra considera que se um dos valores não for passado, ele será considerado com zero.
*/