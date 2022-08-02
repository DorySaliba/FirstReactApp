import { useState } from "react";
import NoteList from "./components/NotesList";
import {nanoid} from 'nanoid';
import Search from "./components/search";
import Header from "./components/Header";

const App =() => {

  const [notes, setNotes] =useState([
    {
    id:nanoid(),
    text:"This is my first note!" ,
     date:"26/07/2022",
    },

    {
      id:nanoid(),
      text:"This is my second note!" ,
       date:"27/07/2022",
      },

      {
        id:nanoid(),
        text:"This is my third note!" ,
         date:"28/07/2022",
        },

        {
          id:nanoid(),
          text:"This is my new note!" ,
           date:"29/07/2022",
          }

               ]);


        const [searchText, setSearchText] = useState('');

        const [darkMode, setDarkMode] =useState(false);


     const addNote=(text) => 
  {

    const date = new Date();
    const newNote= {
      id: nanoid(),
       text: text ,
       date: date.toLocaleDateString()
    }

   const newNotes= [...notes, newNote];

     setNotes(newNotes);

   };

   const deleteNote = (id) => {
   const newNotes= notes.filter((note) => note.id !==id);
   setNotes(newNotes);
   }

  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
    <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText} />

    <NoteList
     notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
     handleAddNote={addNote}
     handleDelete={deleteNote}
     />
    
    </div>

    </div>
  );
};

export default App;
