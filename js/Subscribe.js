async function Subscribe() {
  const response = await fetch("http://localhost:3000/sub");
  const data = await response.json();

  const container = document.createElement("div");
  container.classList.add("subscribe", "w-full", "h-auto", "bg-rose-950", "p-4");

  const heading = document.createElement("h2");
  heading.innerText = data[0].bold;
  heading.classList.add("text-white", "text-center", "p-5", "text-xl");

  const text = document.createElement("p");
  text.innerText = data[0].text;
  text.classList.add("text-stone-200", "text-center", "p-6", "font-light");

  const form = document.createElement("form");
  form.classList.add("flex", "justify-center", "items-center", "mt-4");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Your email address");
  input.classList.add(
    "p-2",
    "border",
    "border-gray-400",
    "mr-2",
    "w-full",
    "sm:w-auto"
  );

  const button = document.createElement("button");
  button.innerText = "Subscribe";
  button.classList.add("px-4", "py-2", "bg-stone-400", "text-rose-800");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showSuccessMessage(container);
  });

  form.appendChild(input);
  form.appendChild(button);

  container.appendChild(heading);
  container.appendChild(text);
  container.appendChild(form);

  const existingContainer = document.querySelector(".subscribe");
  existingContainer.parentNode.replaceChild(container, existingContainer);
}

function showSuccessMessage(container) {
  const successMessage = document.createElement("p");
  successMessage.innerText = "Subscription successful!";
  successMessage.classList.add(
    "text-green-500",
    "text-center",
    "mt-2",
    "font-semibold"
  );
  container.appendChild(successMessage);
}

document.addEventListener("DOMContentLoaded", Subscribe);
export default Subscribe;