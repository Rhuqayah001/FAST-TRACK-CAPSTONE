
// hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.textContent = navLinks.classList.contains("show") ? "☰" : "☰";
    })

    
//card container 
 const cardsContainer = document.querySelector('.card-container');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    cardsContainer.classList.add('show');
                }
            })
        }, { threshold: 0.3 });

        observer.observe(cardsContainer);

// faq
 const questions = document.querySelectorAll('.faq-question');

        questions.forEach((q) => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
        });



// cta
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll(".slide-in, .f-cta, .abt-cta, .animate-left, .animate-right");
    elements.forEach((el) => observer.observe(el));
})