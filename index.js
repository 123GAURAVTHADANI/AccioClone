let tableElement = document.getElementById("table");
let tbody = document.createElement("tbody");
tableElement.setAttribute("border", "1px");
tableElement.appendChild(tbody);

let thead = document.createElement("thead");
tableElement.appendChild(thead);
thead.innerHTML = "<tr><th>Title</th><th>Price</th><th>Description</th></tr>";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      tbody.innerHTML += `
      <tr>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.description}</td>
      </tr>
      `;
    })
  );
// const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

// let element = document.getElementsByClassName("container");
// console.dir(element[0].children);
// element.forEach((item, index) => {
//   item.style.backgroundColor = colors[index % colors.length];
//   item.style.color = "white";
// });
// console.log(element);

// let paraElement = document.createElement("p");
// let spanElement = document.createElement("span");
// let btnElement = document.createElement("button");
// let container = document.getElementById("container");
// let inputField = document.createElement("input");
// container.appendChild(inputField);
// container.setAttribute("id", "container");

// paraElement.innerHTML = "<b>Lorem Ipsum</b>";
// btnElement.innerText = "Click Me";
// spanElement.innerText = "I am span";

// container.appendChild(paraElement);
// container.appendChild(btnElement);
// container.appendChild(spanElement);

// spanElement.style.padding = "10px";
// spanElement.style.backgroundColor = "purple";
// // inputField.focus();

// btnElement.addEventListener("click", () => {
//   // container.removeChild(paraElement);
//   // container.removeChild(spanElement);
//   // container.classList.toggle("bgcolor");
//   container.classList.add("bgcolors");
// });

// let tableElement = document.getElementById("table");
// let tbody = document.createElement("tbody");
// tableElement.appendChild(tbody);
// const tr = document.createElement("tr");
// const td1 = document.createElement("td");
// tr.appendChild(td1);
// tbody.appendChild(tr);
// td1.innerText = "Hello";

// tbody.innerHTML = `<tr>
// <td>Gaurav</td>
// <td>28</td>
// <td>FSD</td>
// </tr>`;
