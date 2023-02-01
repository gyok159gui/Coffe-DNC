const button_card = document.querySelectorAll('.btn-buy')
const card = document.querySelectorAll('.custom-article')
const btn = document.createElement('button')
const modal = document.querySelector('#modal')


card.forEach((element,index) => {
    element.addEventListener('mouseenter', () => {
        btn.innerHTML = 'COMPRAR AGORA'
        button_card[index].appendChild(btn)
        card[index].style.transform = 'scale(1.05)'

    })
    element.addEventListener('mouseleave', () => {
    button_card[index].removeChild(btn)
    card[index].style.transform = 'scale(1)'
    })    
})

function showModal(){
    modal.removeAttribute('hidden')
    modal.innerHTML = `
        <section id="modal-element">
            <div id="close">
                <img src="./assets/images/close.svg" onclick='closeModal()' alt="Close page">
            </div>
            <div id="m-title">
                <h1>Atendimento</h1>
            </div>
            <div id="m-content">
                Rua José de Alencar, 111, Centro<br>
                CEP: 12209-000 | +55 (11) 3333-8000
            </div>
            <div id="m-button">
                <button>ENTRAR EM CONTATO</button>
            </div>
        </section>
    `
}

function closeModal(){
    modal.setAttribute('hidden','')
}
