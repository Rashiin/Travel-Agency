
async function Explore() {
    try {
      const response = await fetch('http://localhost:3000/Explore');
      const data = await response.json();
  
      const mainCard = document.querySelector('.card2');
      const miniCards = document.querySelectorAll('.mincard');
  
      const mainLocation = data[0].location;
      const mainImage = data[0].image;
      const mainDetails = data[0].details;
  
      mainCard.innerHTML = `
        <div class="w-full md:w-1/2 max-w-[700px] h-[350px] bg-gray-100 rounded-lg overflow-hidden relative">
          <img src="${mainImage}" alt="${mainLocation}" class="h-full w-full object-cover">
          <a href="#" class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg font-bold">
            Click Here
          </a>
        </div>
        <div class="w-full md:w-1/2 max-w-[600px] h-[350px] p-4">
          <div class="text-xl font-bold mb-2">${mainLocation}</div>
          <div class="text-gray-700">${mainDetails}</div>
        </div>
      `;
  
      const miniLocations = data.slice(1);
  
      miniCards.forEach((miniCard, index) => {
        const miniLocation = miniLocations[index].location;
        const miniImage = miniLocations[index].image;
        const miniDetails = miniLocations[index].details;
  
        miniCard.innerHTML = `
          <div class="w-full md:w-1/2 max-w-md h-[245px] p-2 ${index >= 2 ? 'mb-10' : ''}">
            <div class="w-full h-[145px] bg-gray-100 rounded-lg overflow-hidden">
              <img src="${miniImage}" alt="${miniLocation}" class="h-full w-full object-cover">
            </div>
            <div class="w-full h-[100px] p-2">
              <div class="text-lg font-bold mb-1">${miniLocation}</div>
              <div class="text-gray-600">${miniDetails}</div>
            </div>
          </div>
        `;
      });
    } catch (error) {
      console.error('Error:', error);
    }
    
  }
  
export default Explore;
  