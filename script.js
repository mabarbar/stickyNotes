const btnAdd = document.querySelector(".addNote");
const btnDeleteAll = document.querySelector(".deleteAllNotes");
const btnSave = document.querySelector(".saveButton");
const btnCancel = document.querySelector(".cancelButton");
const notesSection = document.querySelector(".notes-section");
const noteMenu = document.querySelector(".note-menu-section");

const noteCategory = document.querySelector("#noteCategory");
const noteText = document.querySelector("#noteText");
const errorMessage = document.querySelector(".error");

let cardID = 0;

const showSettings = () => {
  noteMenu.classList.toggle("active");
  resetSettings();
};

// const deleteNote = () => {console.log("si");};

const deleteAllNotes = () => {
  notesSection.textContent = "";
};

const addNote = () => {
  if (
    noteText.value !== "" &&
    noteCategory.options[noteCategory.selectedIndex].value !== "0"
  ) {
    console.log(noteCategory.options[noteCategory.selectedIndex].value);
    saveNote();
  } else {
    errorMessage.textContent = "Please fill all text areas.";
    errorMessage.style.color = "red";
    console.log(noteCategory.options[noteCategory.selectedIndex].value);
  }
};

const saveNote = () => {
  const newNote = document.createElement("div");
  newNote.setAttribute("ID", cardID);
  newNote.innerHTML = `
  <div class="note">
  <div class="noteHeader">
    <h2 class="noteTitle">${
      noteCategory.options[noteCategory.selectedIndex].textContent
    }</h2>
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
  errorMessage.textContent = "Fill all text areas";
  errorMessage.style.color = "black";
};

const deleteNote = (e) => {
  console.log(e.target);
  if (e.target.matches(".deleteButton")) {
    const noteToDelete = e.target.closest(".note");
    noteToDelete.remove();
  }
};

btnAdd.addEventListener("click", showSettings);
btnCancel.addEventListener("click", showSettings);
btnDeleteAll.addEventListener("click", deleteAllNotes);
// btnDelete.addEventListener("click", deleteNote);
btnSave.addEventListener("click", addNote);
notesSection.addEventListener("click", deleteNote);
