const mode = document.querySelectorAll(".mode_icon");
mode.forEach((e) => {
  e.addEventListener("click", () => {
    changeMode();
    mode.forEach((e) => {
      e.style.display = "block";
    });
    const $data = e.getAttribute("data-page"),
      $mode = document.getElementById($data);
    $mode.style.display = "none";
  });
});

const page = document.querySelectorAll("#ChangePage"),
  listPage = document.querySelectorAll(".ListPage");

page.forEach((e) => {
  e.addEventListener("click", () => {
    page.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    listPage.forEach((e) => {
      e.style.display = "none";
    });
    const $data = e.getAttribute("data-page"),
      $pages = document.getElementById($data);
    $pages.style.display = "block";
  });
});

const slideImages = document.querySelectorAll("#pagesImage"),
  Previous = document.getElementById("Previous"),
  Next = document.getElementById("Next");
let fromIndex = 1;

const showImages = (e) => {
  slideImages.forEach((x) => {
    x.style.display = "none";
    x.classList.remove("imagesActive");
  });
  slideImages[e - 1].style.display = "block";
  slideImages[e - 1].classList.add("imagesActive");

  return fromIndex;
};
const prevImages = () => {
  if (fromIndex > 1) {
    fromIndex--;
    showImages(fromIndex);
  }
};

const nextImages = () => {
  if (fromIndex < slideImages.length) {
    fromIndex++;
    showImages(fromIndex);
  }
};
Previous.addEventListener("click", prevImages);
Next.addEventListener("click", nextImages);