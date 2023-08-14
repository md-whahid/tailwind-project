const navBar = document.querySelector("#navbar");
function onToggleNavMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navBar.classList.toggle("top-[0]");
}
