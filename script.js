console.log("Hey There!");

function donateButton(element) {
  element.remove();
}
// -------------------------------Looking For Alert----------------------------------------------------
var petSearch = "Any Pet";

function choosePet(element) {
  alert("You are looking for a " + element.value);
}

// ----------------------------- PEPPER ---------------------------------------------
var pepperPets = document.querySelector("#pepperPetCount");
console.log(pepperPets.innerText);
var petButton = document.querySelector("#petPepperButton");
console.log(petButton);

function addPepperPet(element) {
  pepperPets.innerText++;
}
// ---------------------------- BRUCE -----------------------------------------------

var brucePets = document.querySelector("#brucePetCount");
console.log(brucePets.innerText);
var petBruceButton = document.querySelector("#petBruceButton");
console.log(petButton);

function addBrucePet(element) {
  brucePets.innerText++;
}
// ----------------------------- OSCAR ---------------------------------------------
var oscarPets = document.querySelector("#oscarPetCount");
console.log(pepperPets.innerText);
var petButton = document.querySelector("#petOscarButton");
console.log(petButton);

function addOscarPet(element) {
  oscarPets.innerText++;
}
