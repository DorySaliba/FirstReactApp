import AddNotes from "./AddNotes";
import Note from "./Note";


const NoteList = ({notes, handleAddNote, handleDelete}) => {

    return(
       
        <div className="notes-list"> 
        {notes.map((note)=> (
            <Note 
            id ={note.id} 
            text={note.text}
             date={note.date}
             handleDelete={handleDelete}
             /> 
        
     ) )}
       
          <AddNotes handleAddNote={handleAddNote} />
        </div>
    );
};

export default NoteList;