// let h3Elem = document.getElementById("title");
// let buttonElems = document.getElementsByTagName("button");
// let elems = document.getElementsByClassName("bg-grey");

// console.log("H3:", h3Elem);
// console.log("buttons: ", buttonElems);
// console.log("elems: ", elems);

// buttonElems[0].style.color = "green";
// h3Elem.style.color = "yellow";
// // set all
// for (let i = 0; i < elems.length; i++) {
//   elems[i].style.backgroundColor = "grey";
// }

// // elems[1].style.backgroundColor = "grey";
// // elems[2].style.backgroundColor = "grey";

// // h3Elem.className = "big-size";
// h3Elem.classList.add("big-size");
// h3Elem.classList.remove("bg-grey");
// h3Elem.title = "Title";

// let sectionElem = document.createElement("section");
// let h3Elem = document.createElement("h3");
// let pElem = document.createElement("p");

// sectionElem.appendChild(h3Elem);
// sectionElem.appendChild(pElem);

// h3Elem.innerText = "Javascript";
// pElem.innerText = "This is javascript course day 7";

// sectionElem.classList.add("text-center", "bg-grey");
// h3Elem.classList.add("color__blue");
// pElem.classList.add("color__white");

// document.body.appendChild(sectionElem);
// sectionElem.removeChild(pElem);

// let sectionElems = document.getElementsByClassName("container");
// for (let i = 0; i < sectionElems.length; i++) {
//   let h3Elems = sectionElems[i].getElementsByTagName("h3");
//   console.log("h3Elems: ", h3Elems);
//   h3Elems[0].style.border = "1px solid black";
// }

// let h3First = document.querySelector(".container h3");
// console.log("first h3: ", h3First);

// let h3Elems = document.querySelectorAll(".container h3");
// console.log("h3Elems: ", h3Elems);

let btnChangeColor = document.getElementById("js-btn-change-color");

// btnChangeColor.onclick = changeColorRed();

// function changeColorRed() {
//   document.getElementById("title").style.color = "red";
// }

btnChangeColor.addEventListener("click", function () {
  document.getElementById("title").style.color = "red";
});

// btnChangeColor.onclick = function () {
//   document.getElementById("title").style.color = "red";
// };
