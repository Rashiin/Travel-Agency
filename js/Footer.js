// Your JSON data
const footerData = [
    {
      "text": "About Us",
      "id": 1
    },
    {
      "text": "Awards",
      "id": 2
    },
    {
      "text": "Careers",
      "id": 3
    },
    {
      "text": "Sponsorship",
      "id": 4
    },
    {
      "text": "Qatar Executive",
      "id": 5
    },
    {
      "text": "Group companies",
      "id": 6
    },
    {
      "text": "Duty Free",
      "id": 7
    },
    {
      "text": "Corporate travel",
      "id": 8
    },
    {
      "text": "AI Drap",
      "id": 9
    },
    {
      "text": "Contact Us",
      "id": 10
    },
    {
      "text": "Travel Alert",
      "id": 11
    },
    {
      "text": "Trade Partners",
      "id": 12
    }
  ];
  
  // Function to create the footer
  function createFooter() {
    const footerContainer = document.querySelector('.footer2 .grid');
  
    // Create li elements with links based on JSON data
    footerData.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('text-white', 'mb-2', 'text-sm'); // Add Tailwind CSS classes
      const a = document.createElement('a');
      a.classList.add('text-white', 'no-underline', 'font-light'); // Add Tailwind CSS classes
      a.href = `#${item.id}`; // You can set the actual href here
      a.textContent = item.text;
      li.appendChild(a);
      footerContainer.appendChild(li);
    });
  }
  
  // Call the createFooter function to generate the footer
 export default createFooter();
  