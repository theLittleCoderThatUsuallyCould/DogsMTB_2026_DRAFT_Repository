const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

//Opens the hamburger menu
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//Closes the hamburger menu when clicked outside the menu
document.addEventListener('click', function(event) {
  // Check if the menu is open

  // AND check if the click was outside the menu
  // AND check if the click was not on the button itself
  if (!hamMenu.contains(event.target) && !offScreenMenu.contains(event.target)) {
    // Remove the active class to close the menu
    if(offScreenMenu.classList.contains("active")){
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle("active");
    // If you have a separate toggle icon, you can turn it off here too
    // menuButton.classList.remove('is-active');
  }}
});

//FAQ
document.addEventListener("DOMContentLoaded", () =>{
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", ()=> {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".icon");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent ="-";
      }
    });
  });


});
