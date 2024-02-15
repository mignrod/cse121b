/* W06: Project */

const phonesElement  = document.querySelector('#phones');
let phoneList = [];


/* async getPhones Function using fetch()*/
const getPhones = async () => {
    const response = await fetch('https://run.mocky.io/v3/e34d2dc5-eab2-4145-9940-dfe1dfdda41a');
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

