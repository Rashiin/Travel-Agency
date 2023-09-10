async function Book() {
  const data = await fetch('http://localhost:3000/book');
  const book = await data.json();
  const bookElement = book[0];

  const bookContainer = document.querySelector('.book');
  bookContainer.style.backgroundImage = `url('${bookElement.bgImage}')`;
  bookContainer.classList.add('w-full', 'sm:w-[85%]', 'h-[150px]', 'bg-center', 'bg-cover', 'bg-no-repeat', 'mx-auto', 'rounded-lg');

  document.getElementById('bookText').innerHTML = bookElement.text;
  document.getElementById('bookLink').innerHTML = bookElement.click;

  document.getElementById('bookLink').addEventListener('mouseover', () => {
    document.getElementById('bookLink').style.color = 'red'; 
  });

  document.getElementById('bookLink').addEventListener('mouseout', () => {
    document.getElementById('bookLink').style.color = 'black';
  });
}

export default Book;