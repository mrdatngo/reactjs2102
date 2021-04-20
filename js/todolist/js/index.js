// step1 : get 3 elem
let olElem = document.querySelector("#todo-list .list");
let inputElem = document.querySelector("#todo-list .input-sujbect");
let btnAddElem = document.querySelector("#todo-list .btn-add");
console.log(olElem, inputElem, btnAddElem);

// step 2: get event add button
// step 3: get value from input and push ol
btnAddElem.addEventListener("click", () => {
  // console.log("value", inputElem.value);
  let li = document.createElement("li");
  li.innerText = inputElem.value;

  // add button remove
  let buttonRemove = document.createElement("button");
  buttonRemove.innerText = "-";

  li.appendChild(buttonRemove);

  olElem.appendChild(li);

  // remove action
  buttonRemove.addEventListener("click", () => {
    olElem.removeChild(li);
  });
  inputElem.value = "";
});
