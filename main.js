const urlAtual = window.location.href
const urlClass = new URL(urlAtual)
const thanks = urlClass.searchParams.get("thanks")
const form = document.querySelector('form')
const h2 = document.querySelector('.contact-content h2')
const p = document.querySelector('.contact-content p')


if (thanks == 'true') {
    h2.innerHTML = 'Muito obrigado por compartilhar seu projeto comigo! 😁'
    p.innerHTML = 'Retornarei contato o mais breve possivel!'
    form.style.display = 'none'
}