function buildUl(columns, rows) {
    const ulElement = document.createElement("ul");
    ulElement.className = "hidden absolute top-10 transition-all w-[80vw] text-black flex flex-wrap duration-300 bg-white z-[1999] left-0";
    ulElement.style.listStyle = "none"; // Remove list style
    ulElement.style.padding = "0"; // Remove default padding

    // Calculate the width and height for each column and row
    const columnWidth = 100 / columns + "%";
    const rowHeight = 100 / rows + "%";

    // Create columns inside the ul
    for (let i = 0; i < columns; i++) {
        const column = document.createElement("ul");
        column.style.width = columnWidth;
        column.style.height = "100%"; // Each column takes the full height
        column.style.padding = "0"; // Remove default padding
        ulElement.appendChild(column);

        // Create rows inside each column
        for (let j = 0; j < rows; j++) {
            const row = document.createElement("li");
            row.style.height = rowHeight;
            column.appendChild(row);
        }
    }

    return ulElement;
}


function buildLi(data, isActive) {
    const liElement = document.createElement("li");
    liElement.className = "group relative";

    const flexContainer = document.createElement("div");
    flexContainer.className = "flex items-center"; // Create a flex container

    if (isActive) {
        liElement.classList.add("active"); // Add a class to indicate active submenu
    }
    if (data["image"]) {
        const imgElement = document.createElement("img");
        imgElement.src = data["image"];
        imgElement.style.maxWidth = "100%"; // Limit maximum width to the container
        imgElement.style.padding = "10px";
        imgElement.style.height = "220px";
        // Maintain aspect ratio

        flexContainer.appendChild(imgElement); // Add image to the flex container
    }

    const textElement = document.createElement("span");
    textElement.innerHTML = data["name"];

    flexContainer.appendChild(textElement); // Add text to the flex container

    liElement.appendChild(flexContainer); // Add the flex container to the list item

    if (data["children"]) {
        const columns = 4; // Number of columns in the dropdown
        const ul = buildUl(columns);

        const children = data["children"];
        children.forEach((element, index) => {
            const column = ul.children[index % columns];
            column.appendChild(buildLi(element));
        });

        liElement.classList.add("has-children"); // Add a class to indicate li has children
        liElement.appendChild(ul);
    }

    if (data["emoji"]) {
        const emojiElement = document.createElement("span");
        emojiElement.innerHTML = data["emoji"];
        liElement.appendChild(emojiElement);
    }

    return liElement;
}

function toggleDropdown(liElement) {
    const ulElement = liElement.querySelector("ul");

    if (liElement.id === "enMenuItem") {
        showLanguageOptions(ulElement);
    } else {
        ulElement.classList.toggle("hidden");
        ulElement.classList.toggle("block");
        ulElement.classList.toggle("sm:absolute");
        ulElement.classList.toggle("sm:top-10");
        ulElement.style.left = "0";
    }
}
// ...

async function showLanguageOptions(ulElement) {
    ulElement.innerHTML = ""; // Clear the existing menu items
  
    try {
      // Fetch the language data from the REST Countries API
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
  
      const languages = new Set();
  
      // Extract unique languages from the country data
      countries.forEach((country) => {
        if (country.languages) {
          country.languages.forEach((language) => {
            languages.add(language.name);
          });
        }
      });
  
      // Create and populate the language menu items
      languages.forEach((language) => {
        const li = document.createElement("li");
        li.innerText = language;
        ulElement.appendChild(li);
      });
  
      // Show the language options menu
      ulElement.classList.remove("hidden");
      ulElement.classList.add("block");
      ulElement.classList.add("sm:absolute");
      ulElement.classList.add("sm:top-10");
      ulElement.style.left = "0";
    } catch (error) {
      console.log("Error fetching language data:", error);
    }
  }
showLanguageOptions();

async function Menu() {
    const leftTopBarUl = document.getElementById("top-bar-left");
    const rightTopBarUl = document.getElementById("top-bar-right");

    let data = await fetch("http://localhost:3000/menu");
    let response = await data.json();

    response.forEach((element) => {
        if (element["isLeft"]) {
            const isActive = element["name"] === "EN"; // Check if submenu is active (change "EN" to the appropriate menu item)
            const li = buildLi(element, isActive);
            li.addEventListener("click", () => toggleDropdown(li));
            leftTopBarUl.appendChild(li);
        } else {
            rightTopBarUl.appendChild(buildLi(element));
        }
    });
}
export default Menu;