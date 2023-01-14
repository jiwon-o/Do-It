"use strict";

const activePage = window.location.pathname;
const sidebar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link a");
const toggleBtn = document.querySelector(".toggle-btn");

/** Sidebar url link */
navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

/** Sidebar open/close */
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/** Responsive design */
window.addEventListener("load", onLoadAndResize);
window.addEventListener("resize", onLoadAndResize);

function onLoadAndResize() {
  if (innerWidth >= 1024) {
    sidebar.classList.add("open");
  } else {
    sidebar.classList.remove("open");
    if (innerWidth < 420) {
      toggleBtn.classList.add("hide");
    } else {
      toggleBtn.classList.remove("hide");
    }
  }
}
