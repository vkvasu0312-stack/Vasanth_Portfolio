document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.right = "18px";
  nav.style.padding = "18px";
  nav.style.background = "#0e1118";
  nav.style.border = "1px solid #202531";
  nav.style.borderRadius = "12px";
});
