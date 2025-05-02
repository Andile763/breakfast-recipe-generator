function generateRecipe(event) {
  event.preventDefault(); // Prevent the form from submitting

  new Typewriter("#recipe", {
    string: ["Generating your breakfast recipe..."],
    autoStart: true,
    cursor: null,
    //delay: 200,
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
