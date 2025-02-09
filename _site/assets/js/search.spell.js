const spellArtistrys = ["evocation","array","wake","enchantment","necromancy","divination","illusion","alteration",];
const types = ["combat","aid","utility","debilitation","ascertainment","animation",];

function getQuery() {
    const params = new URLSearchParams(new URL(window.location.href).search);
    let query = params.get('query')??"";
    let artistrys = spellArtistrys.filter(artistry => params.has(artistry.toLowerCase()));
    let types_selected = types.filter(type => params.has(type.toLowerCase()));

    // Fill Search Form with query values
    searchbox = document.getElementById('searchBox');
    searchbox.value = query;
    artistrys.forEach(artistry => {document.getElementById(`artistry_${artistry}`).checked = params.has(artistry.toLowerCase())});
    types_selected.forEach(type => {document.getElementById(`type_${type}`).checked = params.has(type.toLowerCase())});
    return {
        "query": query,
        "filter": {
            "type" : types_selected,
            "artistry": artistrys
        }
    }
}

window.onload = function performSearch() {
    fetch("/api/spells.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(textContent => {
        // get the text.
        search(JSON.parse(textContent.slice(0,textContent.length - 2) + "]"),getQuery());
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function search(document, query) {
    console.log(query);
    let results = document;
    if (query != "") {
        results = document.filter(doc => doc.title.toLowerCase().includes(query.query.toLowerCase()));
        
    } 
    // Filter Spells
    results = (query.filter.type.length > 0 )?filterType(query.filter.type,results):results;
    results = (query.filter.artistry.length > 0 )?filterArtistry(query.filter.artistry,results):results;

    if (results.length > 0){
        displayResults(results);
    } else {
        displayZeroResults();
    }
}

function filterArtistry(query, result) {
    return result.filter(doc => 
        doc.artistry.toLowerCase().split(", ").map(artistry=>{ return query.includes(artistry); }).includes(false) ? false : true
        
    );
}

function filterType(query, result) {
    return result.filter(doc => query.includes(doc["type"].toLowerCase()));
}

function displayResults(results) {
    const navigationsElement = document.getElementById('navigations');

    navigationsElement.innerHTML = `<div class="row text-black-50 ms-3 me-5">
        <div class="col-5"><small><strong>NAME</strong></small></div>
        <div class="col-1"><small><strong>STAMINA</strong></small></div>
        <div class="col-2"><small><strong>DURATION</strong></small></div>
        <div class="col-1"><small><strong>RANGE</strong></small></div>
        <div class="col-3"><small><strong>AREA OF EFFECT</strong></small></div>
    </div>`;
    const resultsElement = document.getElementById('results');
    resultsElement.classList.add("accordion");

    resultsElement.innerHTML = "";
    results.forEach(result => {
        let listItem = document.createElement('div');
        listItem.classList.add("accordion-item");
        listItem.innerHTML=`<div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${result.slug}" aria-expanded="false" aria-controls="${result.slug}">
            <div class="row w-100">
                <div class="col-5">
                    <h5 class="card-title"><a class="text-dark text-decoration-none" href="${result.url}">${result.title}</a></h5>
                    <h6 class="card-subtitle text-body-secondary"><small>${result.type} | ${result.artistry}</small></h6>
                </div>
                <div class="col-1 fw-semibold align-content-center">${result.cost}</div>
                <div class="col-2 fw-semibold align-content-center">${result.duration}</div>
                <div class="col-1 fw-semibold align-content-center">${result.range}</div>
                <div class="col-3 fw-semibold align-content-center text-truncate">${result.aoe}</div>
            </div>
        </button></div>
        <div id="${result.slug}" class="accordion-collapse collapse" data-bs-parent="#results">
            <div class="accordion-body">
                ${result.card}
            </div>
        </div>`;
        resultsElement.appendChild(listItem);
    });
}

function displayZeroResults() {
    const resultsElement = document.getElementById('results');

    resultsElement.innerHTML = `<div class="w-100 d-flex flex-column align-items-center pt-4 mt-4">
        <h1>No Spells found!</h1>
    </div>`;
}

function displayMeta(key, value, size) {
    return `<div class="col${(size > 1)?`-${size}`: ""}"><small class="fw-semibold">${key}</small><br>${value}</div>`;
}