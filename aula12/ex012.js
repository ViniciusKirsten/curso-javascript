//sempre vou usar o new date para coletar informações de horario.
var agora = new Date()

/*para pegar somente a hora eu tenho que usar o (getHours)
 mas tem outros comandos que da para pegar com o (get), como
 por exemplo: (dia, minuto, segundo, milissegundo, ano ...)
*/
var hora = agora.getHours
var hora = 8
console.log(`agora são exatamente ${hora} horas`)
if(hora< 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}