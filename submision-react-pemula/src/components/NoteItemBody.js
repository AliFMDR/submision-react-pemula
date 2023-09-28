import React from 'react';
import {showFormattedDate} from '../utils/data.js'
 
function NoteItemBody({ title, body, date }) {
 return (
   <div className="note-item__content">
     <h3 className="note-item__title">{title}</h3>
     <p className='note-item__date'>Created At: {showFormattedDate(date)}</p>
     <p className="note-item__body">{body}</p>
   </div>
 );
}
 
export default NoteItemBody;