import * as notesService from "../../utilities/notes-service";
import { useState, useEffect } from "react";
import NotesList from "../../components/Notes/NotesList";
import NotesForm from "../../components/Notes/NotesForm";


export default function Home() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const notes = await notesService.getAll();
    setNotes(notes);
  }

  async function createNote(text) {
    const note = await notesService.create({ text: text });
    console.log(note);
  }

  async function deleteNote(id) {
    await notesService.deleteOne(id);
    getNotes();
  }

  return (
    <div>
      <h1>Home</h1>
      <NotesForm
        createNote={createNote}
        setNotes={setNotes}
        getNotes={getNotes}
      />

      {notes.length > 0
        ? <NotesList notes={notes} deleteNote={deleteNote} />
        : "No notes to display."}
    </div>
  );
}
