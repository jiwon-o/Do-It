const items = document.querySelector(".todo-list__items");
const input = document.querySelector(".add__input");
const addBtn = document.querySelector(".add__button");
const form = document.querySelector(".todo-list__add-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.append(item);
  item.scrollIntoView({ block: "end" });

  input.value = "";
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${text}</span>
        <div class="item__btn">
          <button class="item__btn__mark">
            <i class="fa-solid fa-star"></i>
          </button>
          <button class="item__btn__delete">
            <i class="fa-solid fa-circle-minus" data-id="${id}"></i>
          </button>
        </div>
      </div>`;
  id++;
  return itemRow;
}

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const deleteItem = document.querySelector(`.item__row[data-id="${id}"]`);
    deleteItem.remove();
  }
});
