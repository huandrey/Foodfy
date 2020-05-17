const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const a = document.querySelector('.close-modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        const imgId = card.getAttribute('id');
        const h4 = card.querySelector('h4').innerText;
        const p = card.querySelector('p').innerText;

        modalOverlay.classList.add('active');

        modalOverlay.querySelector('img').src=`${imgId}`;
        modalOverlay.querySelector('h4').innerText=`${h4}`;
        modalOverlay.querySelector('p').innerText=`${p}`;
    })
}
a.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

/*
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})
*/
