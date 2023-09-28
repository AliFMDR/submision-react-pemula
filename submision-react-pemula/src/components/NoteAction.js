import React from 'react';
 
function NoteAction({ id, onDelete,onArchive }) {
  return( 
  <div className='note-item__action'>
  <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
  <button className='note-item__archive-button' onClick={()=> onArchive(id)}>Archive</button>
  </div>
  )
}
 
export default NoteAction;