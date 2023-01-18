import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [newNote, setNewNote] = useState("");
  const [notes, setnotes] = useState([]);
  const [showAll, setshowall] = useState(true);
  const notestoshow = showAll
    ? notes
    : notes.filter((n) => n.important === true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log(response);
      setnotes(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const HandleAdd = (event) => {
    event.preventDefault();
    // create notes

    const note = {
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
    };
    if (newNote !== "") {
      axios
        .post("http://localhost:3001/notes", note)
        .then((response) => {
          console.log(response);
          setnotes(notes.concat(response.data));
          setNewNote("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setdelete = (id) => {
    var response = window.confirm(
      `do you really want to delete note with id ${id}`
    );
    if (response === true) {
      axios
        .delete(`http://localhost:3001/notes/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setnotes(notes.filter((n) => n.id !== id));
    } else {
      setnotes(notes);
    }
  };
  const tooglebutton = showAll ? "show impotant" : "show all";
  return (
    <>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            setdelete={() => setdelete(note.id)}
          />
        ))}
      </ul>
      <button onClick={() => setshowall(!showAll)}>{tooglebutton} </button>
      <form>
        <input value={newNote} onChange={handleInputChange} />
        <button onClick={HandleAdd}> add </button>
      </form>
    </>
  );
}
export default App;
