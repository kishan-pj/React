import { useState, useEffect } from "react";

//import Form from './components/Form';

import axios from "axios";

import "./App.css";

function App() {
  const [newNote, setNewNote] = useState("");

  const [notes, setNotes] = useState([]);

  const [showAll, setshowAll] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        console.log(response);
        setNotes(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);

    setNewNote(event.target.value);
  };

  const handleadd = (event) => {
    event.preventDefault();

    //create a new note

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

          setNotes(notes.concat(response.data));
        })
        .catch((err) => console.log(err));
    }

    // if (newNote!=='')

    // setNotes(notes.concat(note))

    // setNewNote("")
  };

  const notesShow = showAll ? notes : notes.filter((n) => n.important === true);

  const deletenote = (id) => {
    if (window.confirm(`do you want to delete ${id}`)) {
      axios
        .delete(`http://localhost:3001/notes/${id}`)

        .then((response) => {
          console.log(response);

          setNotes(notes.filter((n) => n.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2>Notes</h2>

      <button onClick={() => setshowAll(!showAll)}>
        {showAll ? "show important" : "show all"}
      </button>

      {/* <button onClick={showImportant}>show important</button> */}

      <ul>
        {notesShow.map((note) => (
          <li key={note.id}>
            {note.content}
            <br />

            {note.date}
            <br />

            <button onClick={() => deletenote(note.id)}>delete</button>
          </li>
        ))}
      </ul>

      <form>
        <input value={newNote} onChange={handleInputChange} />

        <button onClick={handleadd}>add</button>
      </form>
    </>
  );
}

export default App;
