var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let reps = 0
while (reps < ingredients.length) {
  console.log(ingredients[reps]);
  reps++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let b = ingredients.length - 1; b >= 0; b--){
  console.log(ingredients[b]);
}