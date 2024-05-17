import { useState } from "react";

export default function NotesForm({ createNote, setNotes, getNotes }) {
  const [formData, setFormData] = useState({
    text: "",
  });

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await createNote(formData.text);
    getNotes();
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        required
        placeholder="New Note"
      />
      <button type="submit">ADD NOTE</button>
    </form>
  );
}
