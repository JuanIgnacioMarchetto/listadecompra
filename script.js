const itemContainer = document.getElementById("item-container");
const itemInput = document.getElementById("item-input");

const items = [];

// Ejemplo de elementos de muestra
items.push({ name: "Manzanas", quantity: 5 });
items.push({ name: "Leche", quantity: 1 });

function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
        items.push({ name: itemName, quantity: 0 });
        itemInput.value = "";
        renderItems();
    }
}

function updateQuantity(index, quantity) {
    items[index].quantity = parseInt(quantity);
    renderItems();
}

function renderItems() {
    itemContainer.innerHTML = "";

    items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const itemName = document.createElement("div");
        itemName.textContent = item.name;

        const itemQuantity = document.createElement("input");
        itemQuantity.type = "number";
        itemQuantity.value = item.quantity;
        itemQuantity.addEventListener("change", (event) => {
            updateQuantity(index, event.target.value);
        });

        const itemStatus = document.createElement("h2");
        if (item.quantity <= 2) {
            itemStatus.textContent = "Comprar";
        } else {
            itemStatus.textContent = "Suficiente";
        }

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemQuantity);
        itemDiv.appendChild(itemStatus);
        itemContainer.appendChild(itemDiv);
    });
}

renderItems();
