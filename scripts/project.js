/* W06: Project */

const phonesElement  = document.querySelector('#phones');
let phoneList = [];


/* async getPhones Function using fetch()*/
const getPhones = async () => {
    const response = await fetch('https://run.mocky.io/v3/07de3ca3-a969-4434-9be6-a644fe07120c');
    if (response.ok) {
        phoneList = await response.json();
        displayedPhones(phoneList);

    }

};

const displayedPhones = (phones) => {
    phones.forEach(phone => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        img.src = (phone.imageurl);
        img.alt = (`Image ${phone.brand} ${phone.model}`);
        h3.textContent = (`${phone.brand} ${phone.model}`);

        article.appendChild(h3);
        article.appendChild(img);

        phonesElement.appendChild(article);

    });
    
}
getPhones();

