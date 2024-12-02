document.addEventListener('DOMContentLoaded', function(){
    const contactDiv = document.getElementById('contacts');
    contactDiv.innerHTML = `
        <h1 class="second-h1">CONTACT ME</h1>
        <div class="get-in-touch">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124165.6897538088!2d121.97467310889158!3d13.463134687509262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2e027d7b6652b%3A0x656e28e76cffe108!2sSanta%20Cruz%2C%20Marinduque!5e0!3m2!1sen!2sph!4v1733140845029!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <form>
                <input type="text" placeholder="Name" class="name">
                <input type="email" placeholder="Email"><br>
                <textarea name="textarea" id="textarea" placeholder="Message us"></textarea><br>
                <button>Send</button>
            </form>
        </div>

        <div class="icon">
            <p>You can contact me through the form available on the website.</p><br><br>
            <div class="icon-box">
                <img src="images/icons/facebook.png" alt="icon 1">
                <img src="images/icons/tiktok.png" alt="icon 2">
                <img src="images/icons/twitter.png" alt="icon 3">
                <img src="images/icons/whatsapp.png" alt="icon 4">
            </div>
        </div>
    `;
});