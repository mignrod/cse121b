/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Miguelangel Rodriguez';
let currentYear;
let profilePicture = 'images/me.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByName('profilePicture');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.textContent = document.getElementsByName('currentYear');
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);






/* Step 5 - Array */






