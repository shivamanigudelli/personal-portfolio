// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// Reveal animation on scroll

const sections = document.querySelectorAll("section");

const reveal = () => {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();