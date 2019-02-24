
/*
 * An application that provides the functionality of Todo list.
*/
let listArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// get the div with html containing page description
const description = document.getElementById("description");

// get the div that contains the form element
const form = document.getElementById("add_itemform");
const button = form.querySelector("button");
button.addEventListener("click",addItem);

// get the div that contains the html list
const listContainer = document.getElementById("td_List_div");
const list = listContainer.getElementsByTagName("ul")[0];

// get the delete list container
const dete = document.getElementById("del");
const del_b = dete.getElementsByTagName("button")[0];
del_b.addEventListener("click",deleteList);
/*
  Add styling to the description
*/
const desc_header = description.querySelector("h1");
desc_header.style.padding = "0 0 0 40%";

/*
  add styling to the textbox
*/
  const textbox = form.querySelector("input");
  textbox.style.width = "30%";



// when first opening the page bring in previous list items
for( prop of listArray){
  addList(prop);
}

/*
  Prevents reload, update listArray and localStorage, and show updated list
*/
function addItem(e) {
  e.preventDefault();
  const list_value = document.getElementById('listText').value;
  listArray.push(list_value);
  localStorage.setItem('items',JSON.stringify(listArray));
  addList(list_value);
//  form.reset();

}
/*
creates a new list item and appends it to the list
*/
  function addList (lv) {
  const newListItem = document.createElement("li");
  const list_checkbox = document.createElement("input");
  list_checkbox.setAttribute("type","checkbox");
  newListItem.innerText= lv;
  newListItem.appendChild(list_checkbox);
  list_checkbox.addEventListener("click",removeListItem);
  list.appendChild(newListItem);
}


function removeListItem(e){
  console.log(e);
  console.log(e.target.parentElement);
  list.removeChild(e.target.parentElement);
  listArray.splice( listArray.indexOf(e.target.parentElement.innerText), 1 );
  localStorage.setItem('items',JSON.stringify(listArray));
}

/*
* Be able to delete entire list at once
*/
function deleteList(e){
  e.preventDefault();
  console.log('hello');
  localStorage.clear();
  location.reload();
}
