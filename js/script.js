// CASE 3: USING ARRAYS AND LOOPS FOR DYNAMIC CONTENT

// arrays
const desserts = [
  { 
      name: "Strawberry Cake", 
      description: "Delicious and light, with fresh strawberries and creamy frosting.", 
      difficulty: 3,
      image: "/assets/images/strawberry-cake.jpg" 
  },
  { 
      name: "Ice Cream Sundae", 
      description: "Vanilla ice cream with hot fudge, whipped cream, and cherry on top.", 
      difficulty: 1,
      image: "/assets/images/sundae.jpg" 
  },
  { 
      name: "Cheesecake", 
      description: "Creamy cheesecake with a buttery graham cracker crust.", 
      difficulty: 4,
      image: "/assets/images/cheesecake.jpg" 
  },
  { 
      name: "Apple Pie", 
      description: "Classic apple pie with a flaky crust and a cinnamon spice filling.", 
      difficulty: 2,
      image: "/assets/images/apple-pie.jpg" 
  },
  { 
      name: "Tiramisu", 
      description: "Delicious layers of espresso-soaked ladyfingers with mascarpone cream.", 
      difficulty: 5,
      image: "/assets/images/tiramisu.jpg" 
  },
  { 
      name: "Flan", 
      description: "A silky smooth custard dessert topped with rich caramel/coffee sauce.", 
      difficulty: 3,
      image: "/assets/images/flan.jpg" 
  },
  { 
      name: "Chia Delight Yogurt", 
      description: "A luxurious blend of creamy yogurt, chia seeds, and honey, topped with fresh fruits.", 
      difficulty: 2,
      image: "/assets/images/chiapudding.jpg" 
  },
  { 
      name: "Danish Pastry", 
      description: "Flaky, buttery pastry filled with sweet cream cheese or fruit preserves.", 
      difficulty: 4,
      image: "/assets/images/danish.jpg" 
  }
];

// function to display recipes
function displayRecipes() {
  const recipeContainer = document.getElementById('recipe-list');
  recipeContainer.innerHTML = ''; // Clear previous content

  desserts.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
      
      recipeElement.innerHTML = `
          <img src="${recipe.image}" alt="Image of ${recipe.name}">
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <span>Difficulty: ${recipe.difficulty}</span>
      `;
      
      recipeContainer.appendChild(recipeElement);
  });
}

window.onload = displayRecipes; 