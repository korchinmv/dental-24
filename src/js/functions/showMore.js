document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.querySelector(".service-page__doctors-btn");
  const doctorItems = document.querySelectorAll(".doctors-list__item");
  let visibleItems = 6;

  function checkButtonVisibility() {
    if (visibleItems >= doctorItems.length) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "flex";
    }
  }

  function init() {
    doctorItems.forEach((item, index) => {
      if (index >= visibleItems) {
        item.classList.add("doctors-list__item--hidden");
      } else {
        item.classList.remove("doctors-list__item--hidden");
      }
    });
    checkButtonVisibility();
  }

  init();

  showMoreBtn.addEventListener("click", function () {
    // Добавляем класс с анимацией к новым элементам
    for (
      let i = visibleItems;
      i < visibleItems + 3 && i < doctorItems.length;
      i++
    ) {
      doctorItems[i].classList.remove("doctors-list__item--hidden");
      doctorItems[i].classList.add("doctors-list__item--new-item");

      // Удаляем класс анимации после завершения
      setTimeout(() => {
        doctorItems[i].classList.remove("doctors-list__item--new-item");
      }, 500);
    }

    visibleItems += 3;
    checkButtonVisibility();

    // Плавная прокрутка к новым элементам
    if (visibleItems < doctorItems.length) {
      setTimeout(() => {
        doctorItems[visibleItems - 3].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    } else {
      // Если это последние элементы, прокручиваем к кнопке
      setTimeout(() => {
        showMoreBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  });
});
