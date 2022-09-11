import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note,setNote]=useState({

    title:'',
    content:''
  });

  function InputEvent(event) {
    const { name, value } = event.target;

    setNote(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }




  
  const Add=(event) => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

  }
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={InputEvent} placeholder="Title" />
        <textarea name="content"  value={note.content}  onChange={InputEvent} placeholder="Take a note..." rows="3" />
        <button onClick={Add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
