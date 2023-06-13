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
function deleteItem(index) {
    items.splice(index, 1);
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
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            deleteItem(index);
        });
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemQuantity);
        itemDiv.appendChild(itemStatus);
        itemDiv.appendChild(deleteButton);
        itemContainer.appendChild(itemDiv);
    });
}

renderItems();
const itemContainer = document.getElementById("item-container");
const itemInput = document.getElementById("item-input");

let items = [];

// Ejemplo de elementos de muestra
items.push({ name: "Manzanas", quantity: 5 });
items.push({ name: "Leche", quantity: 1 });

// Cargar la lista guardada al cargar la aplicación
loadItems();

function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
        items.push({ name: itemName, quantity: 0 });
        itemInput.value = "";
        saveItems();
        renderItems();
    }
}

function updateQuantity(index, quantity) {
    items[index].quantity = parseInt(quantity);
    saveItems();
    renderItems();
}

function deleteItem(index) {
    items.splice(index, 1);
    saveItems();
    renderItems();
}

function saveItems() {
    localStorage.setItem("shoppingList", JSON.stringify(items));
}

function loadItems() {
    const savedList = localStorage.getItem("shoppingList");
    if (savedList) {
        items = JSON.parse(savedList);
        renderItems();
    }
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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            deleteItem(index);
        });

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemQuantity);
        itemDiv.appendChild(itemStatus);
        itemDiv.appendChild(deleteButton);
        itemContainer.appendChild(itemDiv);
    });
}

renderItems();
