fetch('foods.json')
  .then(response => response.json())
  .then(data => {
    // 최신 날짜순으로 정렬
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const foodList = document.getElementById('food-list');
    data.forEach(food => {
      const foodItem = document.createElement('div');
      foodItem.className = 'food';

      foodItem.innerHTML = `
        <h2>${food.name}</h2>
        <p><em>${food.date}</em></p>
        <img src="${food.image}" alt="${food.name}" />
        <p>${food.description}</p>
      `;
      foodList.appendChild(foodItem);
    });
  });
