/* W06: Project */

const phonesElement  = document.querySelector('#phones');
let phoneList = [];


/* async getPhones Function using fetch()*/
const getPhones = async () => {
    const response = await fetch('https://run.mocky.io/v3/3f7c09d3-a7ae-4c14-a715-d103e9e2a990');
    if (response.ok) {
        phoneList = await response.json();
        sortedPhones(phoneList);

    }

};

/* Funtion to displayed cards of phones and populate the grid */
const displayedPhones = (phones) => {
    phones.forEach(phone => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let details = document.createElement('button');
        details.textContent = 'Check Specs';

        img.src = (phone.imageurl);
        img.alt = (`Image ${phone.brand} ${phone.model}`);
        img.title = (`$${phone.price}`);

        h3.textContent = (`${phone.brand} ${phone.model}`);

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(details);

        phonesElement.appendChild(article);

    });
    
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';

}

/* filterPhones Function before sorted, call reset() function to clear lists every filter choice */
const filterPhones = (phones) => {
    reset();
    let filter = document.getElementById('filtered-brand').value;

    switch (filter) {
        case 'apple':
            displayedPhones(phones.filter((phone) => phone.brand.includes('Apple')));
            break;
        
        case 'huawei':
            displayedPhones(phones.filter((phone) => phone.brand.includes('Huawei')));
            break;

        case 'oneplus':
            displayedPhones(phones.filter((phone) => phone.brand.includes('OnePlus')));
            break;

        case 'motorola':
            displayedPhones(phones.filter((phone) => phone.brand.includes('Motorola')));
            break;

        case 'samsung':
            displayedPhones(phones.filter((phone) => phone.brand.includes('Samsung')));
            break;
        
        case 'all':
            displayedPhones(phones);
            break;

    }
}

/* Sort phones alphabetically according to its brand*/
const sortedPhones = (phones) => {
    const sortedList = phones.sort((a, b) => {
        if (`${a.brand} ${a.model}` < `${b.brand} ${b.model}` ) {
            return -1;
        } else if (`${a.brand} ${a.model}` > `${b.brand} ${b.model}`) {
            return 1;
        } else {
            return 0;
        }
    });
    displayedPhones(sortedList);

}



getPhones();

