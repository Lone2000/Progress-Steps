document.addEventListener("DOMContentLoaded", () => {
  const progress_container_line = document.querySelectorAll(".line");
  const progress_container_round = document.querySelectorAll(".round");
  const button_prev = document.querySelector(".prev");
  const button_next = document.querySelector(".next");

  console.log(progress_container_round);

  //   console.log(progress_container);
  //   console.log(button_prev);
  //   console.log(button_next);
  // Handle click on btn with value next
  count_line = 0;
  count_round = 0;

  button_next.addEventListener("click", () => {
    if (count_line !== progress_container_line.length) {
      progress_container_line[count_line].classList.add("active");
      progress_container_round[count_round + 1].classList.add("active");

      count_line += 1;
      count_round += 1;
    }
  });

  button_prev.addEventListener("click", () => {
    if (count_line !== 0) {
      progress_container_line[count_line - 1].classList.remove("active");
      progress_container_round[count_round].classList.remove("active");

      count_line -= 1;
      count_round -= 1;
    }
  });
});
