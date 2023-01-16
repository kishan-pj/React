const Note = () => {
  const note = props.note;

  return (
    <>
      {note.content}
      <br />

      {note.date}
      <br />

      <button onClick={() => deletenote(note.id)}>delete</button>
    </>
  );
};

export default Note;
