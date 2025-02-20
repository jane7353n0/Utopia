
function getQuery() {
    /*
    const params = new URLSearchParams(new URL(window.location.href).search);
    let query = params.get('query')??"";
    let artistrys = spellArtistrys.filter(artistry => params.has(artistry.toLowerCase()));
    let types_selected = types.filter(type => params.has(type.toLowerCase()));

    // Fill Search Form with query values
    searchbox = document.getElementById('searchBox');
    searchbox.value = query;
    artistrys.forEach(artistry => {document.getElementById(`artistry_${artistry}`).checked = params.has(artistry.toLowerCase())});
    types_selected.forEach(type => {document.getElementById(`type_${type}`).checked = params.has(type.toLowerCase())});
    */
    console.log("Get query values:");
    return {
        "query": document.getElementById('searchBox').value.toLowerCase(),
        "filter": Object.keys(filter).map(key => {
            return {
                "name" : key,
                "type": filter[key].type,
                "values": filter[key].values.filter(value => {
                    return document.getElementById(`${key}_${value.toLowerCase()}`).checked;
                })
            };
        })
    };
}

window.onload = performSearch();

function performSearch() {
    /*fetch("/api/spells.json")
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
    });*/
    console.log("Window loaded");
    search(documents, getQuery());
}

const myOffcanvas = document.getElementById('filter')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
    console.log("Offcanvas Filter closed");
    search(documents, getQuery());
})

document.getElementById("search")


function search(document, query) {
    console.log(query);
    let results = document;
    if (query != "") {
        results = results.filter(doc => doc.title.toLowerCase().includes(query.query.toLowerCase()));
        
    } 
    query.filter.forEach(filter => {
        switch (filter.type) {
            case "multiselect_exclusive":
                if (filter.values.length > 0) {
                    console.log(`Performe Filter ${filter.name}`)
                    results = results.filter(doc => 
                        doc[filter.name].map(artistry=>{ return filter.values.includes(artistry); }).includes(false) ? false : true
                    );
                }
                break;
            case "multiselect_inclusive":
                if (filter.values.length > 0) {
                    results = results.filter(doc => filter.values.includes(doc[filter.name]));
                }
                break;
            default:
                break;
        }
         
    })
    console.log(`${results.length} results found!`)
    displayResults(results)


}

function displayResults(results) { 
    if (results.length > 0) {
        document.getElementById('no-results').classList.add('d-none');
        document.getElementById('results').classList.remove('d-none');
    } else {
        document.getElementById('no-results').classList.remove('d-none');
        document.getElementById('results').classList.add('d-none');
    }

    for (let i = 0; i < documents.length; i++) {
        let element = document.getElementById(documents[i].slug);
        
        element.hidden = !(results.includes(documents[i]));
        
    }

}
