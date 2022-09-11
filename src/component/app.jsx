import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  function addNote(note) {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  }

  function onDelete(id) {
    setAddItem((olddata) => {
      return olddata.filter((curentdata, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea passNote={addNote} />
    
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
