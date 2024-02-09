/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement  = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        let img = document.createElement("img");
        img.src = (temple.imageUrl);
        img.alt = (temple.location);

        article.appendChild(h3Element);
        article.appendChild(img);

        templesElement.appendChild(article);

    });

}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        templeList = await response.json();
        sortedTemples(templeList);

    }
};


/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';

};


/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
            break;

        case 'older':
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0 ,1)));
            break;

        case 'all':
            displayTemples(temples);
            break;


    }
}

/* Sort temples alphabetically */
const sortedTemples = (temples) => {
    const sortedListTemples = temples.sort((a, b) => {
        if (a.templeName < b.templeName ) {
            return -1;
        } else if (a.templeName > b.templeName) {
            return 1;
        } else {
            return 0;
        }
    });
    displayTemples(sortedListTemples);

}
/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    filterTemples(templeList)

});

getTemples();