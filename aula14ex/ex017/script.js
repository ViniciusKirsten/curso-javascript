function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML =''
        for(let c=1; c<=10; c++){
            /*Criando elementos para a minha lista que esta dentro do HTML.
            option seria a tag dentro do meu 'select' em HTML 
            ex: 
            <select name="tabuada" id="seltab">
            <option>nome do item</option>
            </select>*/
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            //adicionar o elemento filho, que seria o meu item
            tab.appendChild(item)
        }
    }

}