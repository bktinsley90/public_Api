/**
 * DOM elements
 */
let galleryDiv = document.getElementById('gallery')
let body = document.querySelector('body')

/**
 * Fetch Functions
 */

const fetchData = async () => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=12');
        const data = await res.json()
        const users = data.results
        for (let i = 0; i < users.length; i++) {
            generateCard(users[i])
            createModal(users[i], i)
        }
    } catch (e) {
        console.log('Pump your breaks Error', e)
    }

}
fetchData()
/**
 * Helper Functions
 * @params {data} takes in the data from API and using template literals to generate cards
 */

function generateCard(data, index) {
    const galleryHTML =
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
            <p class="card-text">${data.email}</p>
            <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
        </div>
        </div>`

    galleryDiv.insertAdjacentHTML('beforeend', galleryHTML)


}
/**
 * Modal windows- create the modal then use event listener to activate
 */

function createModal(data, i) {
    console.log(data, i)
    // Create modal
    const openModal = `
        <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data.picture.thumbnail}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.name.first}</h3>
                <p class="modal-text">${data.email}</p>
                <p class="modal-text cap">${data.location.city}city</p>
                <hr>
                <p class="modal-text">${data.cell}(555) 555-5555</p>
                <p class="modal-text">${data.location.street.number} ${data.location.street.name},${data.location.city} ${data.location.state} ${data.location.postcode}</p>
                <p class="modal-text">Birthday: ${data.dob}</p>
            </div>
        </div>`
    body.insertAdjacentHTML('afterbegin', openModal)

    const modalContainer = document.querySelector('.modal-container')
    // set style display to none
    modalContainer.style.display='none'
    // addEventListner to unhide
    let cards = document.querySelectorAll('.card')
    cards[i].addEventListener('click', () => {
        modalContainer.style.display='block'
    })
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        modalContainer.style.display='none'
    })
}
