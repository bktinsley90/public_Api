/**
 * DOM elements
 */
let galleryDiv = document.getElementById('gallery')
let body = document.querySelector('body')
let cards = document.querySelectorAll('.card')
/**
 * Fetch Functions
 */
fetchData('https://randomuser.me/api/?results=12')
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => generateCard(data.results))
        .catch(error => console.log('Pump your breaks Error'))
}  

/**
 * Helper Functions
 * @params {data} takes in the data from API and using template literals to generate cards
 */

function generateCard(data) {
    console.log(data)
    data.forEach(item => {
        const galleryHTML = 
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${item.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
            <p class="card-text">${item.email}</p>
            <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
        </div>
        </div>`

        galleryDiv.insertAdjacentHTML('beforeend', galleryHTML)
    });

}
/**
 * Modal windows- create the modal then use event listener to activate
 */

function createModal(e) {
    e.map(item => {
        const openModal =`
        <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${item.picture.small}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${item.name.first}</h3>
                <p class="modal-text">${item.email}</p>
                <p class="modal-text cap">${item.location.city}city</p>
                <hr>
                <p class="modal-text">${item.cell}(555) 555-5555</p>
                <p class="modal-text">${item.location.street.number} ${item.location.street.name},${item.location.city} ${item.location.state} ${item.location.postcode}</p>
                <p class="modal-text">Birthday: ${item.dob}</p>
            </div>
        </div>`
        body.insertAdjacentHTML('afterbegin', openModal)
    })
      
 }
 /**
  * Event Listener
  * 
  */
//cards.addEventlistener('click', createModal())

/**
 * Post Data
 */