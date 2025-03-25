function cardList(contentList) {
    var content = Object.assign(document.createElement("ul"), {
        className: "list list-group list-group-flush",
    });
    
    contentList.forEach(x=>{
            var li = Object.assign(document.createElement("li"), {
                className: "list-group-item",
            });
            li.appendChild(x);
            content.appendChild(li);
    });

    return content;
}

function formReadOnly(id, label, value) {
    return Object.assign(document.createElement(`div`), {
        innerHTML: `<label class='meta-label' for='${id}'>${label}</label><div class='meta-content' id='${id}'>${value}</div>`
    });
}

function cardGrid(id, dict) {
    var grid = Object.assign(document.createElement("div"), {
            className: 'card-meta-grid row'
        });
    [Object.keys(dict).map(key => {
        return Object.assign(document.createElement("div"), {
            className: `item-${dict[key].size}`
        }).appendChild(formReadOnly([dict[key].label, id].join("-"), dict[key].label, dict[key].value))
    })].forEach(x => {
        grid.appendChild(x);
    });
    return grid;
}

function parseContent(content) {
    return Object.assign(document.createElement("div"), {
            innerHTML: content
    });
}