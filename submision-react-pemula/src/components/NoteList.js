import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete  }) {
  if(notes.length !==0){
 return ( 
   <div className="notes-list">
     {
       notes.map((note) => (
         <NoteItem 
         key={note.id} 
         id={note.id}
         date={note.createdAt}
         title={note.title}
         body={note.body}
         onDelete={onDelete}/>
       ))
     }
   </div>
 )}else{
  return <div className='notes-list__empty-message'><h1>Empty Note</h1></div>
 }
}
 
export default NoteList;