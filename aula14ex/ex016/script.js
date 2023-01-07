function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    //length seria o comprimento, quantas letras tem dentro.
    if(ini.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        
        res.innerHTML ='Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        
        //variavel com escopo em bloco
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p<=0){
            //Caso PASSO for menor que zero ou zero
            window.alert('Passo invalido, Considerando PASSO 1')
            p = 1
        }
        
        if (i< f){
            //Contagem crescente
            for(var c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //Contagem regressiva
            for(var c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }
}