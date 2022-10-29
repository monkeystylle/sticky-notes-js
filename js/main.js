const btnAddNote = document.querySelector('.add-note');
const notesContainer = document.querySelector('.notes-container');
const notesCountLabel = document.querySelector('.note-count');

function createNoteElement() {
  const note = document.createElement('div');
  const title = document.createElement('input');
  const body = document.createElement('textarea');

  //add class to the node
  note.classList.add('note', getRandomNoteStyle());

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

//generate random color of note sheet
function getRandomNoteStyle() {
  const styles = [1, 2, 3];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  return `note-style-${randomStyle}`;
}

function updateNotesCount() {
  const notesCount = notesContainer.children.length;
  notesCountLabel.textContent = `${notesCount} note${
    notesCount !== 1 ? 's' : ''
  }
  `;
}

//add note
btnAddNote.addEventListener('click', () => {
  const note = createNoteElement();

  //delete prompt when double clicked
  note.addEventListener('dblclick', () => {
    const title = note.querySelector('.note-title').value;
    const removeNote = confirm(`Are you wish to delete ${title} ? `);

    if (!removeNote) {
      return;
    }

    //remove the note
    note.remove();
    updateNotesCount();
  });

  notesContainer.appendChild(note);
  updateNotesCount();
});
