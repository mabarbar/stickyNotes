const btnAdd = document.querySelector(".addNote");
const btnDeleteAll = document.querySelector(".deleteAllNotes");
const notesSection = document.querySelector(".notes-section");
const btnDelete = document.querySelectorAll(".deleteButton");
const noteMenu = document.querySelector(".note-menu-section");

const showSettings = () => {
  noteMenu.classList.toggle("active");
};

const deleteNote = () => {};

const deleteAllNotes = () => {
  notesSection.textContent = "";
};

btnAdd.addEventListener("click", showSettings);
btnDeleteAll.addEventListener("click", deleteAllNotes);
btnDelete.addEventListener("click", deleteNote);
