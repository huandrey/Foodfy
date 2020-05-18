const links = document.querySelectorAll('.button')
console.log(links)

function changeLink(link) {
    //lê-se: se existir a classe no objeto link chamada hidden - portanto, oculta - , altere o texto do link para mostrar 
    if (link.classList.contains('hidden')) {
        link.innerText = 'Mostrar'
    //lê-se: se não, altere o texto de link para esconder
    }else {
        link.innerText = 'Esconder'
    }
}
    //lê-se: para cada link dentro de links
for (let link of links) {
    //lê-se: adicione um evento de clique para esse link, ao dar o clique será feita determinada função
    link.addEventListener('click', () => {
        //lê-se: guarda p mim numa constante chamada id o atributo de nome recipe-id q está dentro desse objeto link (é necessário q se tinha algum tipo de atributo relacioando com essa tag no html)
        const id = link.getAttribute('recipe-id');
        //lê-se: blz, feito isso.. pega o link vê se tem alguma classe hidden nele, se tiver tira (muda texto para esconder), se não tiver, coloque (muda texto para mostrar)
        link.classList.toggle('hidden')
        //porem isso tem que ser feito em todos os links, e ao clicar em um, é necessário que apenas aquele no qual eu cliquei feche, por isso temos q especificar qual conteúdo q a gnt quer q desapareça
        //lê-se: pega p mim algum conteudo q contenha o id = a constante q a gnt pegou la em cima (por isso q é necessario q aquele atributo seja igual ao id do html)
        document.querySelector(`#${id}`).classList.toggle('hidden')
        //lê-se: pega o link do momento e roda a função changeLink
        changeLink(link);
    })
}

