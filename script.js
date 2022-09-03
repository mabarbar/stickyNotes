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

let colorWheel = document.querySelector(".color");
let selectedValue;

const showSettings = () => {
  noteMenu.classList.toggle("active");
  resetSettings();
};

const deleteAllNotes = () => {
  notesSection.textContent = "";
};

const addNote = () => {
  if (
    noteText.value !== "" &&
    noteCategory.options[noteCategory.selectedIndex].value !== "0"
  ) {
    saveNote();
  } else {
    errorMessage.textContent = "Please fill all text areas.";
    errorMessage.style.color = "red";
  }
};

const saveNote = () => {
  const newNote = document.createElement("div");
  newNote.setAttribute("ID", cardID);
  newNote.classList.add("note");
  newNote.innerHTML = `
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
  checkColor(newNote);
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
  if (e.target.matches(".deleteButton")) {
    const noteToDelete = e.target.closest(".note");
    noteToDelete.remove();
  }
};

const selectValue = () => {
  selectedValue = noteCategory.options[noteCategory.selectedIndex].textContent;
};

const checkColor = (note) => {
  selectValue();
  switch (selectedValue) {
    case "Notatka":
      note.style.background = "hsl(60, 100%, 50%)";
      note.style.boxShadow = "hsl(60, 80%, 45%) 20px 30px";
      break;
    case "Work":
      note.style.background = "hsl(195, 53%, 79%)";
      note.style.boxShadow = "hsl(195, 33%, 74%) 20px 30px";
      break;
    case "Home":
      note.style.background = "hsl(9, 100%, 64%)";
      note.style.boxShadow = "hsl(9, 80%, 59%) 20px 30px";
      break;
    case "Shopping":
      note.style.background = "hsl(54, 77%, 75%)";
      note.style.boxShadow = "hsl(54, 57%, 70%) 20px 30px";
      break;
    case "Hobby":
      note.style.background = "hsl(84, 100%, 59%)";
      note.style.boxShadow = "hsl(84, 80%, 54%) 20px 30px";
      break;
    case "Other":
      note.style.background = "hsl(0, 0%, 95%";
      note.style.boxShadow = "hsl(0, 0%, 75%) 20px 30px";
      break;
  }
};

selectValue();

btnAdd.addEventListener("click", showSettings);
btnCancel.addEventListener("click", showSettings);
btnDeleteAll.addEventListener("click", deleteAllNotes);
// btnDelete.addEventListener("click", deleteNote);
btnSave.addEventListener("click", addNote);
notesSection.addEventListener("click", deleteNote);
