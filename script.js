const paragraphs = document.querySelectorAll('.hw-service-section__text');
const mainImage = document.getElementById('mainImage');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {

        const newImage = paragraph.getAttribute('data-image');
        mainImage.src = newImage;

        paragraphs.forEach(p => p.classList.remove('active'));

        paragraph.classList.add('active');
    });
});
