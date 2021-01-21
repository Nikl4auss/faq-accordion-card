const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".faq-answer");

questions.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.nextElementSibling.classList.contains("show")) {
      e.nextElementSibling.classList.remove("show");
      e.firstElementChild.classList.remove("rotate");
    } else {
      e.nextElementSibling.classList.add("show");
      e.firstElementChild.classList.add("rotate");
    }
  });
});
