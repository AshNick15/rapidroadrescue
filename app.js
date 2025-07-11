// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
// Form submission handling - now relies on Formsubmit.co service
// Remove preventDefault() since we want default form submission
// Add animation class to sections as they come into view
const observerOptions = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
