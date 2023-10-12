document.addEventListener('DOMContentLoaded', (e) => {
// Select the image element using its ID
const images = document.querySelectorAll('div.content-wrapper img');

// Update the image source
images.forEach(image => {
    image.setAttribute('src', 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg');
})
});