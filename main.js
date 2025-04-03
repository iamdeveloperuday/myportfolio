const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const aboutBtn = document.getElementById('about-btn');
aboutBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const projectBtn = document.getElementById('project-btn');
projectBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = "red"; // Change "red" to any color you like
});


window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    const hue = (coords.x / window.innerWidth) * 360; // Vary hue based on x position
    const brightness = 50 + (coords.y / window.innerHeight) * 50; // Adjust brightness based on y position

    circles.forEach(function (circle) {
        circle.style.backgroundColor = `hsl(${hue}, 100%, ${brightness}%)`;
    });
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    cursor.style.top = x;
    cursor.style.left = y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();



// show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-data, .project-h2, .about-content-1-img, .blob-1, .contact-left`)
sr.reveal(`.home-right-data, .about-h2, .about-content-2-data`, {
    origin: 'bottom'
})
sr.reveal(`.about-contnent-1-data, .blob-2, .about-content-2-img, .contact-right`, {
    origin: 'left'
})
sr.reveal(`.project-card`, {
    interval: 100
})