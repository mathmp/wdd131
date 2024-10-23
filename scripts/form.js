// Sample product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Function to populate the select options
function populateProductOptions() {
    const selectElement = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Using product id as the value
        option.textContent = product.name; // Displaying product name
        selectElement.appendChild(option);
    });
}

// Function to increment review counter
function incrementReviewCounter() {
    let count = localStorage.getItem('reviewCount') || 0;
    count++;
    localStorage.setItem('reviewCount', count);
}

// Populate the product options on page load
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    document.getElementById('reviewForm').addEventListener('submit', incrementReviewCounter);
});
