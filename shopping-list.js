// document.querySelector('header').appendChild(document.createElement('button'))
// document.querySelector('button').id = 'bbb'
// const item = document.createElement('li')
// document.querySelector('ul').appendChild(item)
// item.textContent = 'num 5'

// function addItem(item) {
//     const li = document.createElement('li')
//     li.className = 'item'
//     li.textContent = item
//     document.querySelector('ul').appendChild(li)
// }
// addItem('num 6')

// const header = document.querySelector('header')
// const text = document.createElement('h3')
// text.textContent = 'example text'

// const title = document.querySelector('h1')
// header.insertBefore(text, title)

// function insertAfter(newElement, oldElement){
//     oldElement.insertAdjacentElement("afterend",newElement)
// }
// function insertAfter(newElement, oldElement){
//     oldElement.parentElement.insertBefore(newElement, oldElement.nextSibling)
// }

// insertAfter(text, title)
//  REMOVE
// function removeItem(index){
// const item = document.querySelector(`li:nth-child(${index})`)
// item.remove()
// }
// // removeItem(1)

// const removeItem2 = (index) => document.querySelector(`li:nth-child(${index})`).remove()

// removeItem(4)

// EVENTS
// const clearBtn = document.querySelector('#clear-btn')
// const items = document.querySelectorAll('.item')
// function clearItems() {
//     items.forEach((item) => item.remove())
// }
// clearBtn.onclick = clearItems // - FIRS TWAY
// clearBtn.addEventListener('click', clearItems) // - SECOND TWAY

// clearBtn.addEventListener('click', () => {
//     items.forEach((item) => item.remove())
// }) // - THIRD WAY

const form = document.querySelector("form");
const addItemInput = document.querySelector("form input");
const addItemButton = document.querySelector("form button");
const filter = document.getElementById("filter");
const list = document.querySelector("ul");
let editMode = false;

form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  const val = addItemInput.value;
  if (editMode) {
    editMode = false;
    const itemToEdit = list.querySelector(".edit-item");

    removeItemFromStorage(itemToEdit.textContent);
    console.log(itemToEdit.classList);
    itemToEdit.remove();
    e.addItemInput = "";
    addItemButton.textContent = "+ Add Items";
  }
  const storageString = localStorage.getItem("items");
  if (storageString.includes(val)) {
    alert(val + ` is already exist`);
  } else {
    addItemToDom(val);
    if (val != "") {
      addItemToStorage(val);
    }
    addItemInput.value = "";
  }
  const itemList = document.querySelectorAll("li");
  hideClearFilter();
}
function addItemToDom(item) {
  const li = document.createElement("li");
  if (item == "") {
    alert("add item befor submit");
    return;
  }
  li.className = "item";
  const text = document.createTextNode(item);
  li.appendChild(text);
  const span = document.createElement("span");
  list.appendChild(li).appendChild(span);
}
function addItemToStorage(item) {
  let itemStorageArray;
  if (localStorage.getItem("items") == null) {
    itemStorageArray = [];
  } else {
    itemStorageArray = JSON.parse(localStorage.getItem("items"));
  }
  itemStorageArray.push(item);
  localStorage.setItem("items", JSON.stringify(itemStorageArray));
}
function removeItem(e) {
  if (e.target.parentElement.className == "item") {
    if (confirm("are you sure?")) {
      e.target.parentElement.remove();
      removeItemFromStorage(e.target.parentElement.textContent);
    }
  }
  hideClearFilter();
}
function editItem(e) {
  if (e.target.className == "item") {
    editMode = true;
    const itemList = document.querySelectorAll("li");
    itemList.forEach((item) => {
      item.style.color = "black";
      item.className = "item";
    });
    e.target.className = "item edit-item";
    e.target.style.color = "gray";
    addItemInput.value = e.target.textContent;
    addItemButton.textContent = "Update Item";
  }
}
function removeItemFromStorage(item) {
  let itemStorageArray;
  itemStorageArray = JSON.parse(localStorage.getItem("items"));
  itemStorageArray = itemStorageArray.filter((i) => i != item);
  localStorage.setItem("items", JSON.stringify(itemStorageArray));
}
list.addEventListener("click", removeItem);
list.addEventListener("click", editItem);

const clearBtn = document.querySelector("#clear-btn");
function clearItems() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  localStorage.removeItem("items");
  hideClearFilter();
}
clearBtn.addEventListener("click", clearItems);

function hideClearFilter() {
  const itemList = document.querySelectorAll("li");
  if (itemList.length == 0) {
    clearBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filter.style.display = "block";
  }
}

function filterItems() {
  const itemList = document.querySelectorAll("li");
  itemList.forEach((item) => {
    const textItem = item.textContent;
    if (textItem.indexOf(filter.value) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
filter.addEventListener("keyup", filterItems);

function displayItemsFromStoragetems() {
  if (localStorage.getItem("items") == null) {
    return;
  } else {
    itemStorageArray = JSON.parse(localStorage.getItem("items"));
    itemStorageArray.forEach((item) => {
      addItemToDom(item);
    });
  }
}
displayItemsFromStoragetems();
hideClearFilter();
