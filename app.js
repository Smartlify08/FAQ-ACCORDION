const toggleBtn = document.querySelectorAll(".toggle-btn");
const accordionsContent = document.querySelectorAll(".question-answer");

toggleBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const allBtns = document.querySelectorAll(".toggle-btn");
    allBtns.forEach((otherBtn, otherBtnIndex) => {
      if (otherBtn.classList.contains("close") && otherBtn !== btn) {
        otherBtn.classList.replace("close", "open");
        otherBtn.setAttribute("src", "./assets/images/icon-plus.svg");
        otherBtn.parentElement.parentElement.children[1].classList.add(
          "hidden"
        );
        accordionsContent[otherBtnIndex].style.maxHeight = 0;
      }
    });
    if (e.target.classList.contains("open")) {
      e.target.classList.replace("open", "close");
      e.target.setAttribute("src", "./assets/images/icon-minus.svg");
      e.target.parentElement.parentElement.children[1].classList.remove(
        "hidden"
      );
      accordionsContent[index].style.maxHeight =
        accordionsContent[index].scrollHeight + "px";
    } else {
      e.target.parentElement.parentElement.children[1].classList.add("hidden");
      e.target.classList.replace("close", "open");
      e.target.setAttribute("src", "./assets/images/icon-plus.svg");
      e.target.parentElement.parentElement.children[1].classList.add("hidden");
      accordionsContent[index].style.maxHeight = 0;
    }
    console.log(e.target);
  });
});
