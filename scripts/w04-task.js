/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Miguelangel Rodriguez",
    photo: "images/me.jpeg",
    favoriteFoods: [
        "Hallacas",
        "Pabellon", 
        "Pizza",
        "Pasticho",
        "Hamburgers", 
        "Grilled Chicken"
    ],
    hobbies: [
        "Play Soccer",
        "Read",
        "Watch TV Series",
        "Code",
        "Listen to Music"
    ],
    placesLived: [

    ],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Barquisimeto, Venezuela",
        length: "40 years"
    },
    {
        place: "Caracas, Venezuela",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = `Profile image of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let liElement = document.createElement("li");
    liElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(liElement);
    
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let liElementHobbie = document.createElement("li");
    liElementHobbie.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(liElementHobbie);
    
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let placeElement = document.createElement("dt");
    let lenghtElement = document.createElement("dd");

    placeElement.textContent = placeLived.place;
    lenghtElement.textContent = placeLived.length

    document.querySelector("#places-lived").appendChild(placeElement);
    document.querySelector("#places-lived").appendChild(lenghtElement);
    
});
