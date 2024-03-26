const accordingBtns = document.querySelectorAll(".according-btn");
const plusIcons = document.querySelectorAll(".plus__icon");
const minusIcons = document.querySelectorAll(".minus__icon");

accordingBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const description = btn.nextElementSibling;
    const plusIcon = plusIcons[index];
    const minusIcon = minusIcons[index];

    if (description.style.display === "block") {
      description.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      description.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
