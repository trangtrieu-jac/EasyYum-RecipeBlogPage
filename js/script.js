// CASE 3: USING ARRAYS AND LOOPS FOR DYNAMIC CONTENT

// arrays of desserts
const desserts = [
  {
    name: "Strawberry Cake",
    description: "Delicious and light, with fresh strawberries and creamy frosting.",
    difficulty: 3,
    image: "/assets/images/strawberry-cake.jpg",
  },
  {
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream with hot fudge, whipped cream, and cherry on top.",
    difficulty: 1,
    image: "/assets/images/sundae.jpg",
  },
  {
    name: "Cheesecake",
    description: "Creamy cheesecake with a buttery graham cracker crust with pistachios on top.",
    difficulty: 4,
    image: "/assets/images/cheesecake.jpg",
  },
  {
    name: "Apple Pie",
    description: "Classic apple pie with a flaky crust and a cinnamon spice filling.",
    difficulty: 2,
    image: "/assets/images/apple-pie.jpg",
  },
  {
    name: "Tiramisu",
    description: "Delicious layers of espresso-soaked ladyfingers with mascarpone cream.",
    difficulty: 5,
    image: "/assets/images/tiramisu.jpg",
  },
  {
    name: "Flan",
    description: "A silky smooth custard dessert topped with rich caramel/coffee sauce.",
    difficulty: 3,
    image: "/assets/images/flan.jpg",
  },
  {
    name: "Chia Delight Yogurt",
    description: "A luxurious blend of creamy yogurt, chia seeds, honey and fresh fruits.",
    difficulty: 2,
    image: "/assets/images/chiapudding.jpg",
  },
  {
    name: "Danish Pastry",
    description: "Flaky, buttery pastry filled with sweet cream cheese or fruit preserves.",
    difficulty: 4,
    image: "/assets/images/danish.jpg",
  },
];

// function to display recipes
function displayRecipes() {
  const recipeContainer = document.getElementById("recipe-list");
  recipeContainer.innerHTML = ""; // Clear previous content

  desserts.forEach((recipe) => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    recipeElement.innerHTML = `
          <img src="${recipe.image}" alt="Image of ${recipe.name}">
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <span>Difficulty: ${recipe.difficulty}</span>
      `;

    recipeContainer.appendChild(recipeElement);
  });
}

// call function displayRecipes
window.onload = displayRecipes;




// CASE 5: FORM VALIDATION ADN ERRIR HANDLING
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", (event) => {
     // prevent form submission
    event.preventDefault();

     // initialize isValid as true
    let isValid = true;

    // validate first name
    const firstName = document.getElementById("firstName");
    const nameError = document.getElementById("nameError");
    const namePattern = /^[a-zA-Z ]+$/;
    if (firstName.value === "" || !firstName.value.match(namePattern)) {
      nameError.textContent = "Please enter a valid name.";
      isValid = false; 
    } else {
      // clear if valid
      nameError.textContent = ""; 
    }

    // validate surname
    const surName = document.getElementById("surname");
    const surNameError = document.getElementById("surnameError");
    const surnamePattern = /^[a-zA-Z ]+$/;
    if (surName.value === "" || !surName.value.match(surnamePattern)) {
      surNameError.textContent = "Please enter a valid surname.";
      isValid = false; 
    } else {
      surNameError.textContent = ""; 
    }

    // validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value === "" || !email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = ""; 
    }

    // validate message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    } else {
      messageError.textContent = ""; 
    }

    // if validation is successful, display success message and clear form
    if (isValid) {
      document.getElementById('successMessage').textContent = "Form submitted successfully!";
      // for reset if success submit
      form.reset(); 
    } else {
      // no success message if there is error
      document.getElementById('successMessage').textContent = ''; 
    }
  });
});
