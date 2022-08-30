const btnAdd = document.querySelector(".addNote");
const btnDeleteAll = document.querySelector(".deleteAllNotes");
const btnDelete = document.querySelectorAll(".deleteButton");
const btnSave = document.querySelector(".saveButton");
const btnCancel = document.querySelector(".cancelButton");
const notesSection = document.querySelector(".notes-section");
const noteMenu = document.querySelector(".note-menu-section");

const noteCategory = document.querySelector("#noteCategory");
const noteText = document.querySelector("#noteText");

let cardID = 0;

const showSettings = () => {
  noteMenu.classList.toggle("active");
};

// const deleteNote = () => {console.log("si");};

const deleteAllNotes = () => {
  notesSection.textContent = "";
};

const saveNote = () => {
  const newNote = document.createElement("div");
  newNote.setAttribute("ID", cardID);
  newNote.innerHTML = `
  <div class="note">
  <div class="noteHeader">
    <h2 class="noteTitle">${noteCategory.value}</h2>
    <button class="deleteButton">
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
  </div>
  <p class="noteContent">
  ${noteText.value}
  </p>
</div>`;

  notesSection.appendChild(newNote);
  showSettings();
  resetSettings();

  cardID++;
};

const resetSettings = () => {
  noteText.value = "";
  noteCategory.value = "";
};

btnAdd.addEventListener("click", showSettings);
btnCancel.addEventListener("click", showSettings);
btnDeleteAll.addEventListener("click", deleteAllNotes);
// btnDelete.addEventListener("click", deleteNote);
btnSave.addEventListener("click", saveNote);
