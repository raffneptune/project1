let bg = document.querySelectorAll(".light"),
  txt = document.querySelectorAll(".text-dark"),
  $ = true;

const changeMode = () => {
  if ($) {
    $ = false;
    console.log($);
    bg.forEach((e) => {
      e.classList.add("dark");
      e.classList.remove("light");
    });
    txt.forEach((e) => {
      e.classList.add("text-white-50");
      e.classList.remove("text-dark");
    });
  } else {
    $ = true;
    console.log($);
    bg.forEach((e) => {
      e.classList.remove("dark");
      e.classList.add("light");
    });
    txt.forEach((e) => {
      e.classList.remove("text-white-50");
      e.classList.add("text-dark");
    });
  }
};