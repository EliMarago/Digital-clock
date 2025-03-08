document.addEventListener("DOMContentLoaded", function () {
  const date = document.querySelector(".date");
  const time = document.querySelector(".time");

  //set Date
  let data = new Date();
  const opzioni = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
  };

  const dataFomattata = new Intl.DateTimeFormat("it-IT", opzioni)
    .format(data)
    .replace(/\//g, "-");

  console.log(dataFomattata);
  date.textContent = dataFomattata;

  //Set Timer
  function timer() {
    const now = new Date();
    time.textContent = now.toLocaleTimeString();
  }
  timer();
  setInterval(timer, 1000);
});
