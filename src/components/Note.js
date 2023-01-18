const Note = (props) => {
  const { note, setdelete } = props;
  return (
    <li>
      <p>{note.content}</p>
      <p>{note.date}</p>
      <button onClick={setdelete}>delete</button>
    </li>
  );
};

export default Note;
