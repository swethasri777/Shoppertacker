let deals = [
    {
      store: "Amazon",
      product: "Kindle Paperwhite",
      originalPrice: 129.99,
      salePrice: 99.99,
      discount: 23,
      expiry: "Feb 28, 2024",
      notes: "Waterproof, 8 GB storage",
      image: "kindle.jpg",
      category: "electronics"
    },
    {
      store: "Best Buy",
      product: "Apple AirPods Pro",
      originalPrice: 249.99,
      salePrice: 199.99,
      discount: 20,
      expiry: "Mar 15, 2024",
      notes: "Noise-cancelling, wireless charging",
      image: "airpods.jpg",
      category: "electronics"
    },
    {
      store: "Walmart",
      product: "Nintendo Switch",
      originalPrice: 299.99,
      salePrice: 269.99,
      discount: 10,
      expiry: "Mar 31, 2024",
      notes: "Includes Mario Kart 8 Deluxe",
      image: "switch.jpg",
      category: "electronics"
    }
  ];

  
  function displayDeals(deals) {
    // Get the deals container element
    let dealsContainer = document.getElementById("deals-container");
    // Clear the previous content
    dealsContainer.innerHTML = "";
    // Loop through the deals array
    for (let deal of deals) {
      // Create a div element for each deal
      let dealDiv = document.createElement("div");
      // Add a class name to the div
      dealDiv.className = "deal";
      // Create the HTML content for the div using template literals
      dealDiv.innerHTML = `
        <div class="deal-image">
          <img src="${deal.image}" alt="${deal.product}">
        </div>
        <div class="deal-info">
          <h3 class="deal-store">${deal.store}</h3>
          <h4 class="deal-product">${deal.product}</h4>
          <p class="deal-original-price">$${deal.originalPrice}</p>
          <p class="deal-sale-price">$${deal.salePrice}</p>
          <p class="deal-discount">${deal.discount}% OFF</p>
          <p class="deal-expiry">Expires: ${deal.expiry}</p>
          <p class="deal-notes">${deal.notes}</p>
        </div>
      `;
      // Append the div to the deals container
      dealsContainer.appendChild(dealDiv);
    }
  }
  

  displayDeals(deals);

  function filterByCategory() {
    // Get the value of the category select element
    let category = document.getElementById("category").value;
    // Filter the deals array based on the category
    let filteredDeals = deals.filter(deal => deal.category === category || category === "all");
    // Display the filtered deals on the page
    displayDeals(filteredDeals);
  }


  document.getElementById("category").addEventListener("change", filterByCategory);


  function sortByOption() {
    // Get the value of the sort select element
    let option = document.getElementById("sort").value;
    // Copy the deals array to avoid mutating the original
    let sortedDeals = [...deals];
    // Sort the deals array based on the option
    if (option === "expiry") {
      // Sort by expiry date in ascending order
      sortedDeals.sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
    } else if (option === "discount") {
      // Sort by discount percentage in descending order
      sortedDeals.sort((a, b) => b.discount - a.discount);
    }
    // Display the sorted deals on the page
    displayDeals(sortedDeals);
  }


  document.getElementById("sort").addEventListener("change", sortByOption);

  