function changePageTheme() {
  let bodyTransform = document.querySelector("body");
  if (bodyTransform.classList.contains("dark")) {
    bodyTransform.classList.remove("dark");
  } else {
    bodyTransform.classList.add("dark");
  }
}
let changeTheme = document.querySelector(".dark-theme");
changeTheme.addEventListener("click", changePageTheme);
