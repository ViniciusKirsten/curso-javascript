//RECURSIVIDADE 
function fatorial(n){
    if( n ==1 ){
        return 1
    }else{
        //chamando a função dentro de outra função
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

então:
n! = n x (n-1)!
não incluindo 
1! = 1
*/