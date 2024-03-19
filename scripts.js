/* Navigating Through Tabs*/

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  tab.addEventListener("click", switchClass);
}

function switchClass(e) {
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.classList.remove("active");
    tabContents[i].classList.remove("show-content");
  }
  
  const index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(e.target)

  e.target.classList.add("active");
  tabContents[index].classList.add("show-content");
}

/* Open and Close Contact form */

function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}