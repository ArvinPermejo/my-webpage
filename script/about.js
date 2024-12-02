document.addEventListener('DOMContentLoaded', function(){

    const images = [
        "./images/arvin1.jpeg",
        "./images/arvin2.jpeg",
        "./images/arvin3.jpeg",
        "./images/arvin4.jpg"
    ];
    
    const aboutDiv = document.querySelector('.about-me');
    aboutDiv.innerHTML = `
        <div class="top-part">
            <img class="second-img" src="${images[3]}" id="arvin-img">
            <p class="second-p">
                "Hello, my name is Arvin Permejo. I possess a strong understanding of the relationship between design and users, focusing on detailed execution and enhancing user experience. I am passionate about working on projects that are both engaging and impactful, taking pride in my contributions. I strive to create clean, visually precise interfaces with smooth animations, ensuring that the user experience is both functional and aesthetically pleasing. I prioritize not only writing efficient code but also maintaining high-quality graphic design and optimized development practices."
            </p>
        </div>
    `;

    let currentIndex = 0;
    const arvinImage = document.getElementById('arvin-img');
  
     // Change the image every 5 seconds with dissolve effect
     setInterval(() => {
        arvinImage.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            arvinImage.src = images[currentIndex];
            arvinImage.style.opacity = 1; 
        }, 500);
      }, 6000); // Change every 5 seconds
});