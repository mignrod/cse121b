/* W06: Project */

const phonesElement  = document.querySelector('#phones');
const phonesSpecs = document.querySelector('#specs');

let phoneList = [];


/* async getPhones Function using fetch()*/
const getPhones = async () => {
    const response = await fetch('https://run.mocky.io/v3/3f7c09d3-a7ae-4c14-a715-d103e9e2a990');
    if (response.ok) {
        phoneList = await response.json();
        sortedPhones(phoneList);

    }
}

/* Funtion to displayed cards of phones and populate the grid */
const displayedPhones = (phones) => {
    phones.forEach(phone => {
        /* Elements for cellphones cards */
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let details = document.createElement('button');
        details.textContent = 'Check Specs';
        details.id = (phone.model);

        img.src = (phone.imageurl);
        img.alt = (`Image ${phone.brand} ${phone.model}`);
        img.title = (`$${phone.price}`);

        h3.textContent = (`${phone.brand} ${phone.model}`);

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(details);

        phonesElement.appendChild(article);
        
        details.addEventListener('click', () => {
            /* Elements for popups specs details */
            let articleSpecs = document.createElement('article');

            let h3Specs = document.createElement('h3');
            h3Specs.textContent = `${phone.brand} ${phone.model}`;

            let imgSpecs = document.createElement('img');
            imgSpecs.src = (phone.imageurl);
            imgSpecs.alt = (`Image ${phone.brand} ${phone.model}`);

            articleSpecs.appendChild(h3Specs);
            articleSpecs.appendChild(imgSpecs);

            phone.specs.forEach(specification => {
                let art = document.createElement('h5');
                art.textContent =
                `| Ram: ${specification.ram} |
                | Storage: ${specification.memory} |
                | OS: ${specification.os} |
                | Cameras: ${specification.backCamera} (Main)
                ${specification.frontCamera} (Selfie) |
                | Processor: ${specification.processor} |
                | CPU: ${specification.cpu} |
                | Battery: ${specification.battery} |
                | Upgradeable: ${specification.upgradable} |
                `

                articleSpecs.appendChild(art);

            });

            phonesSpecs.appendChild(articleSpecs);

            // let openPopup = document.getElementById(details.id);
            
            let	overlay = document.getElementById('overlay');
            
            let	popup = document.getElementById('popup');
            
            overlay.classList.add('active');
            popup.classList.add('active');
            details.classList.add('active');
            // let	closePopup = document.getElementById('btn-cerrar-popup');
            
            
            // closePopup.addEventListener('click', function(e){
            //     e.preventDefault();
            //     overlay.classList.remove('active');
            //     popup.classList.remove('active');
            // });
        });

});

}

/* reset Function */
const reset = () => {
    phonesElement.innerHTML = '';

};

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

/* Function to show specs of the selected phone */
// const showSpecs = (phones) => {
//     let openPopup = phones.document.getElementById(phone.model);

//     let	overlay = document.getElementById('overlay');

//     let	popup = document.getElementById('popup');

//     let	closePopup = document.getElementById('btn-cerrar-popup');

// openPopup.addEventListener('click', () => {
// 	overlay.classList.add('active');
// 	popup.classList.add('active');
// });

// closePopup.addEventListener('click', function(e){
// 	e.preventDefault();
// 	overlay.classList.remove('active');
// 	popup.classList.remove('active');
// });
// }




/* Add the event listeners */ 
document.querySelector('#filtered-brand').addEventListener('change', () => {
    filterPhones(phoneList);

});

getPhones();

