const ctx = document.getElementById('nutrientChart').getContext('2d');
  const nutrientData = {
    labels: ['Protein', 'Fat', 'Carbohydrates'],
    datasets: [{
      label: 'Gram per serving',
      data: [30, 25, 40],  // Example nutritional data (Calories, Protein, Fat, Carbohydrates)
      backgroundColor: [
        'rgb(255, 99, 132)',  // Calories (Red)
        'rgb(54, 162, 235)',  // Protein (Blue)
        'rgb(255, 205, 86)',  // Fat (Yellow)
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: nutrientData,
  };

  const nutrientChart = new Chart(ctx, config);