import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div >
        <div className='note-app__header'>
        <h1>Notes Programming</h1>
          <div className='note-search'>
            <input type="search" placeholder="Cari Disini" 
            value={this.state.search} onChange={this.onSeacrhChangeEventHandler}/>
          </div>
        </div>
        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Notes List</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
 }
  
export default NoteApp;
