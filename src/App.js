import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [newNote, setNewNote] = useState("add a note here");
  const [notes, setNote] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log(response);
    });
  }, []);
  
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    alert("Testing ..");
  };

  return (
    <>
      <h2>Notes</h2>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>

      <form>
        <input value={newNote} onChange={handleInputChange} />

        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}

export default App;
