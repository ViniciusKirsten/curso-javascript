function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    
    //filtrando o erro de data inserida maior que a data atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        //selecionando o  qual sexo esta selecinado, pelo id radsex, selecionando a posição dele
        var fsex = document.getElementsByName('radsex')
        
        //calculando a idade
        var idade = ano - Number(fano.value)
        
        //declarando uma variavel sem dados
        var genero =''
        
        /*Criado essas duas é a mesma coisa que colocar 
        uma tag img com o id foto ex: <img id="foto">
        -
        vai criar um elemento que nesse caso vai ser minha tag img*/
        var img = document.createElement('img')
        //criando um atributo para o meu elemento 
        img.setAttribute('id', 'foto')

        /*"fsex" é o nome do meu id, o zero 
        é a posição que nesse caso representa 
        o homem, pq esta antes que a mulher*/
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade<10){
                img.setAttribute('src', '')
            }else if(idade <21){
                img.setAttribute('src', 'homem-jovem.png')
            }else if(idade< 50){
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                img.setAttribute('src', 'homem-idoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade<10){
                img.setAttribute('src', '')
            }else if(idade <21){
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        
        //centralizando o meu texto da minha div "res"
        res.style.textAlign = 'center'
        
        //inserindo dados na minha div "res"
        res.innerHTML =`Detextamos ${genero} com ${idade} anos`
        
        /*appendChild --> adicionar um elemento
        adicionando a imagem para o meu "res"
        */
       res.appendChild(img)

    }

    
}