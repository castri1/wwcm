function getCards(callback, status, gender) {
    
    const results = fetch("https://rickandmortyapi.com/api/character/?status="+status+"&gender="+gender);

    results.then(response => response.json())
    .then(cards => {
        callback(cards)
    });
}

function putCards(cards) {
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

    document.getElementById("h2").innerHTML=""
}

// getCards(putCards, "","");

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

