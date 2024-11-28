// Array of images and their details
const images = [
    { src: 'Images/Banff.jpg', alt: 'Banff.jpg', title: 'BANFF', description: 'Banff is a picturesque resort town located within Banff National Park in Alberta, Canada. Established in 1885, it is renowned for its stunning natural beauty, featuring majestic mountains, turquoise glacial lakes, and diverse wildlife.' },
    { src: 'Images/NIAGARA FALLS.WEBP', alt: 'NIAGARA FALLS .WEBP', title: 'NIGRA FALLS', description: 'Niagara Falls is a stunning natural wonder located on the border between Ontario, Canada, and New York, USA. It consists of three waterfalls: the Horseshoe Falls, the American Falls, and the Bridal Veil Falls.' },
    { src: 'Images/CHICAGO.jpg', alt: 'CHICAGO.jpg', title: 'CHICAGO', description: 'Chicago, located in northeastern Illinois, is the third largest city in the United States, known for its vibrant culture, rich history, and stunning architecture.' },
    { src:'Images/nature view.jpg', alt:'nature view.jpg', title:'natural', description :'Natural views refer to the stunning visual landscapes created by the Earth s natural features, including mountains, valleys, rivers, lakes, forests, and coastlines. These views can evoke a sense of peace, awe.' },
    { src:'Images/glass sea.webp', alt:'glass sea.webp', title:'glass sea.webp', description:'The term "Glass Sea" often refers to stunning coastal areas where sea glass is prevalent, created from weathered glass fragments that have been smoothed by ocean waves. Sea glass, also known as beach glass, is typically found on shores and is cherished for its beauty and uniqueness.' },
    { src:'Images/BMV.JPG', alt:'BMV', title:'natural', description:'his region is known for its stunning sandstone ridges, lush bushland, and charming mountain towns. It features the iconic Three Sisters rock formation and is part of the Greater Blue Mountains World Heritage Area.' },
    { src:'Images/Taj mahal.jpg', alt:'Taj mahal.jpg', title:'Taj mahal', description:'The Taj Mahal is a stunning ivory-white marble mausoleum located in Agra, Uttar Pradesh, India. Commissioned in 1632 by Mughal Emperor Shah Jahan, it was built in memory of his beloved wife, Mumtaz Mahal, who died during childbirth.' },
    { src: 'Images/Tobermory.jpg', alt: 'Tobermory.jpg', title: 'Tobermory.jpg', description: 'Tobermory experiences a humid continental climate with four distinct seasons, featuring mild summers and cold winters.' },
    { src: 'Images/Toronto-Scenic-Night-Tour.png', alt: 'Toronto-Scenic-Night-Tour.png', title: 'Toronto-Scenic-Night-Tour', description: 'The Toronto Scenic Night Tour is an excellent way to immerse yourself in the citys nightlife while enjoying its stunning architecture and vibrant atmosphere.' },
];

// Function to dynamically generate gallery images
function loadGallery() {
    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.title = image.title;
        imgElement.addEventListener('click', () => openModal(image));
        gallery.appendChild(imgElement);
    });
}

// Function to open modal with the clicked image and details
function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = `${image.title}: ${image.description}`;
    
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Event listener for close button
document.getElementById('closeModal').addEventListener('click', closeModal);

// Event listener to close modal when clicking outside the modal image
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Load gallery when the page is loaded
window.onload = loadGallery;
