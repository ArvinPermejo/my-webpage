document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "./images/arvin1.jpeg",
        "./images/arvin2.jpeg",
        "./images/arvin3.jpeg",
        "./images/arvin4.jpg"
    ];

    const aboutDiv = document.querySelector('.about-me');
    aboutDiv.innerHTML = `
        <div class="top-part">
            <img class="second-img" src="${images[0]}" id="arvin-img" style="opacity: 1; transition: opacity 1s ease;">
            <p class="second-p">
                "Hello, my name is Arvin Permejo. I possess a strong understanding of the relationship between design and users, focusing on detailed execution and enhancing user experience. I am passionate about working on projects that are both engaging and impactful, taking pride in my contributions. I strive to create clean, visually precise interfaces with smooth animations, ensuring that the user experience is both functional and aesthetically pleasing. I prioritize not only writing efficient code but also maintaining high-quality graphic design and optimized development practices."
            </p>
        </div>
    `;

    let currentIndex = 0;
    const arvinImage = document.getElementById('arvin-img');

    const changeImage = () => {
        arvinImage.style.opacity = "0"; 
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            arvinImage.src = images[currentIndex];
            arvinImage.style.opacity = "1"; 
        }, 1000); 
    };

    setInterval(changeImage, 6000); 
});
