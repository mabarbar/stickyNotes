const btnAdd = document.querySelector(".addNote")
const noteMenu = document.querySelector(".note-menu-section")

const showSettings = () => {
  noteMenu.classList.toggle("active")
}

btnAdd.addEventListener("click", showSettings)