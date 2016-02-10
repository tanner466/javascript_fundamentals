var recipe = {
  title: "Chocolate Chip Cookies",
  servings: 4,
  ingredients: [
    "flour",
    "baking soda",
    "butter",
    "sugar",
    "brown sugar",
    "salt",
    "chocolate chips",
    "eggs"
  ]
};

console.log(recipe.title);
console.log("Serves: " +recipe.servings);
console.log("Ingredients:");
for (var i=0; i<recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
