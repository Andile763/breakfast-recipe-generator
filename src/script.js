function displayRecipe(response) {
  console.log("recipe generated", response.data.answer);
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault(); // Prevent the form from submitting

  let ingredientsInput = document.querySelector("#user-input");
  let context =
    "You're the best chef in the world. You are a breakfast recipe generator. Your mission is to generate any 3-ingredients breakfast recipe based on the ingredient provided. The recipe should be clear,concise and easy to follow. The recipe should include the name of the dish, the ingredients, and the steps to prepare it. The recipe should be in English. The recipe should be suitable for a beginner cook. The recipe should be healthy and delicious.Generate this in basic HTML and don't write html then follow with the recipe, just write the recipe. Sign SheCodes AI at the end of the recipe. Make SheCodes AI blue like the search-button";
  let prompt = `User input:Generate a breakfast recipe about ${ingredientsInput.value}`;

  let apiKey = "dc027835t447909af572ffob036660a3";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `⏳Generating the recipe about ${ingredientsInput.value}...`;

  console.log("Generating recipe...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
