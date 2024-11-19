fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      let createCardElement = document.createElement("div");
      createCardElement.setAttribute("class", "card");
      createCardElement.innerHTML = `
      <h1>${item.title}</h1>
      <img src=${item.image} alt=${item.title}/>
      <p>${item.description}</p>
      `;
      createCardElement.style.backgroundColor = "purple";
      createCardElement.style.padding = "10px";
      createCardElement.style.margin = "10px";
      document.getElementById("productCard").append(createCardElement);
    })
  );
