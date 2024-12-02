document.addEventListener('DOMContentLoaded', function() {
    const firstPage = document.getElementById('first-page');
    const devDiv = document.getElementById('dev-div');
    const aboutMeDiv = document.getElementById('about-me');
    const expDiv = document.getElementById('expriences');
    const contactDiv = document.getElementById('contacts');

    firstPage.innerHTML = `
        <p>Hi, I am<br><span class="dev-name">ARVIN<br>PERMEJO</span><br>Let's work together.</p>
    `;

    let count = 0;
    const mainBtn = document.getElementById('main-btn');

    mainBtn.addEventListener('click', function() {
        mainBtn.innerText = 'Show more';
        if (count === 0) {
            firstPage.style.display = 'none';
            devDiv.style.display = 'flex';
        } else if (count === 1) {
            aboutMeDiv.style.display = 'flex';
            aboutMeDiv.scrollIntoView({ behavior: 'smooth' });
        } else if (count === 2) {
            expDiv.style.display = 'block';
            expDiv.scrollIntoView({ behavior: 'smooth' });
        } else if (count >= 3) {
            contactDiv.style.display = 'block';
            contactDiv.scrollIntoView({ behavior: 'smooth' });
            mainBtn.style.display ='none';
        }

        count++;
        console.log(count);
    });
});