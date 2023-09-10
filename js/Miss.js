async function Miss() {
  const response = await fetch('http://localhost:3000/miss');
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  const missContainer = document.querySelector('.miss');

  // Set background image with no-repeat
  missContainer.style.background = `url(${data[0].bgImage}) no-repeat center  fixed`;
  missContainer.style.backgroundSize = 'cover';

  const missContent = document.querySelector('.miss-content');

  const heading = document.createElement('h2');
  heading.innerText = data[0].bold;
  heading.classList.add('text-white', 'text-2xl', 'mb-4');

  const text = document.createElement('p');
  text.innerText = data[0].text;
  text.classList.add('text-white', 'mb-4','text-white');

  const link = document.createElement('a');
  link.innerText = data[0].link;
  link.setAttribute('href', '#');
  link.classList.add('text-blue-500');

  missContent.appendChild(heading);
  missContent.appendChild(text);
  missContent.appendChild(link);
}

document.addEventListener('DOMContentLoaded', Miss);
export default Miss;