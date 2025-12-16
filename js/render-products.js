const grid = document.getElementById("product-grid");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">NT$ ${product.price}</div>
            <div class="product-color">顏色：${product.color}</div>

            <button class="add-to-cart"
                data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price}">
                加入購物車
            </button>
        </div>
    `;

    grid.appendChild(card);
});
