import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteAction from './NoteAction';


 
function NoteItem({title, body, date, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} date={date} />
     <NoteAction id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;