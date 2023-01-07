/*Quando tenho uma função com dois parâmetros 
mas quando chamo a função coloco somente um 
parâmetro, o primeiro vai ser o número que 
foi colocado e o segundo vai ser um numero que 
não existe, então o JS vai retornar NaN*/

/*Posso colocar um valor pré definido para o 
meu parametro, para evitar que ele retorne NaN.

Esse valor vai valer somente quando eu não passar nenhum valor.*/
function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(2, 7))