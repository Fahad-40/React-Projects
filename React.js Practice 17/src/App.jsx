import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sidebar from '../Components/Sidebar'
import Notelist from '../Components/Notelist'
import Newnote from '../Components/Newnote'

function App() {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [editingNote, setEditingNote] = useState(null)

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const deleteNotePermanent = (id) => {
    let newNotesArray = notes.filter((item) => {
      return item.id !== id
    })
    setNotes(newNotesArray)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const startEdit = (note) => {
    setEditingNote(note)
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map((item) => {
      return item.id === updatedNote.id ? updatedNote : item
    }))
    setEditingNote(null)
  }

  const favorite = (note) => {
    setNotes(notes.map((item) => {
      return item.id === note.id ? { ...item, isFavorite: !item.isFavorite } : item
    }))
  }

  const [showFavorite, setShowFavorite] = useState(false)

  const favoriteNotes = () => {
    setShowFavorite(true)
  }

  const [view, setView] = useState("all")

  let visibleNotes = []
  if (view == "all") {
    visibleNotes = notes.filter((item) => {
      return !item.isDelete
    })
  }

  else if (view == "favorite") {
    visibleNotes = notes.filter((item) => {
      return item.isFavorite && !item.isDelete
    })
  }

  else if (view == "trash") {
    visibleNotes = notes.filter((item) => {
      return item.isDelete
    })
  }

  const allNotes = () => {
    setShowFavorite(false)
  }

  const handleDeleteNote = (note) => {
    console.log(note)
    setNotes(notes.map((item) => {
      console.log(note)
      return item.id == note.id ? { ...item, isDelete: !item.isDelete } : item

    }))
  }

  const restoreNote = (id) =>{
    setNotes(notes.map((item) =>{
      return item.id == id ? {...item , isDelete: false} : item
    }))
  }

  const isPinned = (note) => {
    setNotes(notes.map((item) =>{
      return item.id === note.id ? {...item , isPin : !item.isPin} : item
    }))
  }

  const sortedNotes = [...visibleNotes].sort((a , b) => Number(b.isPin || false) - Number(a.isPin || false))

  const [searchText, setsearchText] = useState("")

  const searchHandler = (e) => {
    setsearchText(e.target.value)
  }

  let query = searchText.toLowerCase()

  const searchedNotes = visibleNotes.filter((item) =>{
    return item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
  })

  const [settingNoteList, setSettingNoteList] = useState(true)

  const changeSettingHandle = () => {
    setSettingNoteList(!settingNoteList)
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen p-4'>
        <div className='flex rounded-lg w-[100vw] h-[100%] shadow-[0_0_5px_2px_#E6E6E8]'>
          <Sidebar favoriteNotes={favoriteNotes} allNotes={allNotes} setView={setView} view={view} changeSettingHandle={changeSettingHandle} />
          <Notelist notes={searchedNotes} deleteNotePermanent={deleteNotePermanent} startEdit={startEdit} favorite={favorite} handleDeleteNote={handleDeleteNote} restoreNote={restoreNote} isPinned={isPinned} searchHandler={searchHandler} searchText={searchText} settingNoteList={settingNoteList} />
          <Newnote addNote={addNote} updateNote={updateNote} editingNote={editingNote} setEditingNote={setEditingNote} settingNoteList={settingNoteList} />
        </div>
      </div>
    </>
  )
}

export default App
