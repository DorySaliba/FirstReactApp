
import {AiOutlineDelete} from 'react-icons/ai';


const Note= ({id , text, date, handleDelete}) => {

    return(
        <div className="note">
        <span> {text} </span>

    <div className="note-footer">
    <small> {date} </small>
    <AiOutlineDelete
    
     onClick={()=> handleDelete(id)} 
      className='delete-icon' 
      size='1.3em'
      
      />
    </div>



        </div>
    );
};

export default Note;