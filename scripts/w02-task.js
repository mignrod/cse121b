/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Miguelangel Rodriguez';
let date = new Date()
let currentYear = `${date.toLocaleString('default', {month: 'short'})} ${date.getFullYear()}`;
let profilePicture = ('images/me.jpeg');


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let myFavoriteFoods = ['Hallacas', ' Pabellon', ' Pizza', ' Pasticho', ' Hamburgers', ' Grilled Chicken'];
foodElement.innerHTML = `${myFavoriteFoods}`;
moreFood = ' Cachapas';
myFavoriteFoods.push(moreFood);
foodElement.innerHTML += `<br>${myFavoriteFoods}`;
myFavoriteFoods.shift();
foodElement.innerHTML += `<br>${myFavoriteFoods}`;
myFavoriteFoods.pop();
foodElement.innerHTML += `<br>${myFavoriteFoods}`;




