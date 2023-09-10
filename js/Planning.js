async function Planning() {
  const data = await fetch('http://localhost:3000/planning');
  const planning = await data.json();

  const cardWidths = ['w-1/2', 'w-1/3', 'w-1/4', 'w-1/4'];

  planning.forEach((item, index) => {
    const card = document.getElementById(`card${index + 1}`);
    const cardWidth = cardWidths[index];

    // Create an image element for the background image
    const bgImage = document.createElement('img');
    bgImage.src = item.bgImg;
    bgImage.alt = item.text;
    bgImage.classList.add('w-full', 'h-full', 'object-cover'); // Adjust image size
    card.appendChild(bgImage);

    // Create a paragraph element for the text
    const text = document.createElement('p');
    text.textContent = item.text;
    text.classList.add('absolute', 'bottom-10', 'left-0', 'p-4', 'text-white');
    card.appendChild(text);

    // Create a link element
    const link = document.createElement('a');
    link.textContent = item.link + ' ' + item.symbol; // Add the symbol after the link
    link.href = '#'; // Set the actual link URL here
    link.classList.add('absolute', 'left-0', 'p-4','bottom-[-10px]', 'text-rose-800' ,'no-underline');
    card.appendChild(link);

    // Add Tailwind CSS classes to the card element
    card.classList.add('relative', 'mx-4', 'my-6', 'p-3','pb-[50px]');
    card.classList.add(cardWidth);
    card.classList.add('h-[250px]'); // Adjust card height

    // Add zoom effect class on hover
    card.addEventListener('mouseenter', () => {
      card.classList.add('zoom-card');
    });

    // Remove zoom effect class on hover out
    card.addEventListener('mouseleave', () => {
      card.classList.remove('zoom-card');
    });
  });
}

export default Planning;