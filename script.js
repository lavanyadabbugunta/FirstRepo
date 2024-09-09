const faqss = document.querySelectorAll(".faqs");

faqss.forEach((faqs) => {
  faqs.addEventListener("click", () => {
    faqs.classList.toggle("active");
  });
});