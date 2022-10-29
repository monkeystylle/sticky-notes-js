const btnAddNote = document.querySelector('.add-note');
const notesContainer = document.querySelector('.notes-container');

function createNoteElement() {
  const note = document.createElement('div');
  const title = document.createElement('input');
  const body = document.createElement('textarea');

  //add class to the node
  note.classList.add('note', 'note-style-1');

  //adding attribute to the input field
  title.classList.add('note-title');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Enter note title');

  //add attr to the body
  body.classList.add('note-body');
  body.setAttribute('placeholder', 'Enter note body...');

  //add the title and body to the note as a child
  note.appendChild(title);
  note.appendChild(body);

  console.log('log', note);

  return note;
}

btnAddNote.addEventListener('click', () => {
  const note = createNoteElement();

  notesContainer.appendChild(note);
});
