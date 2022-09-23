let info = ''

function getCards(callback, status, gender) {
    getCardsWithURL(callback, "https://rickandmortyapi.com/api/character/?status="+status+"&gender="+gender)
}

function getCardsWithURL(callback, url) {
    
    const results = fetch(url);

    results.then(response => response.json())
    .then(cards => {
        callback(cards)
    });
}

function putCards(cards) {
    info = cards.info
    cards.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
        
        <div class ="cajaRM">

        <div class="divName"><h2 id="name1">${personaje.name}</h2></div>
        <div> <img class="img" id="imgRM1" src="${personaje.image}" alt="Imagen"></div>
        <div class="divGenero">${personaje.gender}</div>
        <div class="divStatus">${personaje.status}</div>

        </div>
        `);

    const cajaCards = document.querySelector(".targets");

    cajaCards.append(article);


    });

}


function getCardsAll(callback) {
    document.querySelector(".targets").innerHTML = '';
    getCards(putCards, "","");
}

function getCardsFemale(callback) {
    document.querySelector(".targets").innerHTML = '';
    getCards(putCards, "","Female");
}

function getCardsMale(callback) {
    document.querySelector(".targets").innerHTML = '';
    getCards(putCards, "","Male");
}

function getCardsAlive(callback) {
    document.querySelector(".targets").innerHTML = '';
    getCards(putCards, "Alive","");
}

function getCardsDead(callback) {
    document.querySelector(".targets").innerHTML = '';
    getCards(putCards, "Dead","");
}

function previous(callback) {
    if ( info.prev != null ) {
        document.querySelector(".targets").innerHTML = '';
        getCardsWithURL(putCards,info.prev);
    }
}

function next(callback) {
    if ( info.next != null ) {
        document.querySelector(".targets").innerHTML = '';
        getCardsWithURL(putCards,info.next);
    }
}

