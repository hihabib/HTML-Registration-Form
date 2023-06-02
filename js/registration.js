document.querySelector(".language").addEventListener("click", () => {
  const classes = document.querySelector(".language ul").classList;

  if (classes[0] === "show-language") {
    classes.remove("show-language");
  } else {
    classes.add("show-language");
  }
});
