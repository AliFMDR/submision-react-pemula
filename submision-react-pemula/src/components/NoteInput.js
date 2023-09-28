import React from 'react';
 
class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      panjang: 50
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onCreatedAtChangeEventHandler = this.onCreatedAtChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const limit = 50;
      const maxChara = event.target.value.length;
      const resultChara = 50 - maxChara;
      if (event.target.value.length === 51) {
        window.alert('Mencapai Batas Karakter')
        return;}
      return {
        title: event.target.value.slice(0, limit),
        panjang: resultChara
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onCreatedAtChangeEventHandler(event) {
    this.setState(() => {
      return {
        createdAt: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  
 render() {
   return (
    <div className='note-input'>
      <h2>Add Note</h2>
     <form onSubmit={this.onSubmitEventHandler}>
     <p className='note-input__title__char-limit'>
      Batas Karakter: {this.state.panjang}
     </p>
       <input 
       className='note-input__title' 
       type="text" placeholder="Title" 
       value={this.state.title} 
       onChange={this.onTitleChangeEventHandler}/>

       <textarea
            className="note-input__body"
            type="text"
            placeholder="Isi"
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
       <button type="submit">Add New Notes</button>
     </form>
     </div>
   )
 }
}
 
export default NoteInput;