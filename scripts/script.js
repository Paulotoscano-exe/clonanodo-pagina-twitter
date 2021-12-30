
const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")



function pegarTweet(event) {
    event.preventDefault();

    const tweetTextArea = textarea.value
    criarTweet(tweetTextArea)
}




function criarTweet(tweetTextArea){
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    const tweet = {
        nome: 'Paulo',
        foto: 'imagens/ProfilePicPaulo.png',
        usuario:'@Paulooow.zip',
        text: tweetTextArea,
        tempo:`${hora}:${min}`
    }

    listarTweet(tweet)
}


function listarTweet(tweet){

    const {nome, foto, usuario, text, tempo} = tweet

    let li = document.createElement('li')
    li.classList.add('conteudoPrincipal__tweet')

    let img = document.createElement('img')
    img.src = foto
    img.classList.add('tweet__fotoPerfil')

    let div = document.createElement('div')
    div.classList.add('tweet__conteudo')

    let h4 = document.createElement('h4')
    h4.innerText = nome

    let span = document.createElement('span')
    span.innerText = `${usuario} ${tempo}`

    let p = document.createElement('p')
    p.innerText = text

    div.appendChild(h4)
    div.appendChild(span)
    div.appendChild(p)
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.value = ''
}


tweetar.addEventListener('click', pegarTweet);