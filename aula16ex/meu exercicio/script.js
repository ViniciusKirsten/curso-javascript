//adicionando meu vetor, como variavel global
var numlista = []

function adicionar(){
    //pegando dados da minha caixa de texto
    var txtnum = window.document.getElementById('txtn')
    var num = Number(txtnum.value)
    
    //adicionando um valor para o meu vetor
    numlista.push(num)

    //adicionando itens a minha lista
    if(num>=1 && num<=100){
        var tab = window.document.getElementById('listan')
        var item = document.createElement('option')
        item.text = `valor ${num} adicionado!`
        item.value = `tab${num}`
        tab.appendChild(item)
    }else{
        window.alert('Digite um valor entre 1 e 100')
    }
}

function finalizar(){
    let texto = window.document.getElementById('res')
    //texto.innerHTML = `hello ${soma()}` 
    window.alert(soma()+``)
    
    function maior(){

    }
    function menor(){
    }
    
    function soma(){
        var soma = 0
        for(var i = 0; i <= numlista.length; i++){
            soma += numlista[i]
        }
        return soma
    }
    function media(){

    }
}