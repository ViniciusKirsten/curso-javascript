var valores = [8, 1, 7, 4, 2, 9]

//Forma de mostrar os valores do meu vetor separadamente
console.log('\nforma errada')
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log('\nforma correta')
for(var i = 0; i< valores.length; i++){
    console.log(valores[i])
}

console.log('\nforma ainda mais simplificada')
for(var i in valores){
    console.log(valores[i])
}

/*Procurando um número em um vetor pelo valor e não pela posição.
N esse tipo de comando ele retorana a posição.*/
console.log(`\nO valor 9 está na posição ${valores.indexOf(9)}`)

