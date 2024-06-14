import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, deleteNote, editNote, selectedNote, setSelectedNote, searchQuery, setSearchQuery }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setSelectedNote={setSelectedNote}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} selectedNote={selectedNote} />;
    default:
      return <Home />;
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([...noteList, { id, title, desc }]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  const editNote = (id, title, desc) => {
    setNoteList(noteList.map(note => note.id === id ? { id, title, desc } : note));
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      selectedNote={selectedNote}
      setSelectedNote={setSelectedNote}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
}

export default App;
