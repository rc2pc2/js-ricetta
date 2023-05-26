const buttonAdderEl = document.querySelector('button.button-adder');
const buttonResipeGenEl = document.querySelector('button.button-recipe');


const ulListElement = document.querySelector('ul.list-recipe');
const ricetta = [];

let recipeGenerated = false;
let counter = 0;

buttonAdderEl.addEventListener('click', function(){
   if (!recipeGenerated){
      const inputElement= document.querySelector('input');
      ricetta.push(inputElement.value);
      ulListElement.innerHTML += "<li>" + inputElement.value + "</li>";
      inputElement.value= "";
      counter++;
   }
});

buttonResipeGenEl.addEventListener('click', function(){
   if (counter >= 2){
      recipeGenerated = true;

      document.querySelector('div.image-wrapper').innerHTML = '<img src="https://source.unsplash.com/700x400/?meal" alt="Random dish image">';

      const recipeWrapper = document.querySelector('div.recipe-wrapper');
      ulListElement.classList.add('display-none');

      for (let index = 0; index < ricetta.length; index++) {
         const ingredient = ricetta[index];
         recipeWrapper.innerHTML += '<span class="ingredient">' + ingredient + '</span>';
      }
   }
})