export default function NotesList({ notes, deleteNote }) {
  return (
    <div>
      <h1>NotesList</h1>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <small>{new Date(note.createdAt).toLocaleString()}</small>
            <p>{note.text}</p>

            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
