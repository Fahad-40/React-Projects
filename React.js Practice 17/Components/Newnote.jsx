import React from 'react'
import { useState , useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Newnote = ({addNote , updateNote , editingNote , setEditingNote , settingNoteList}) => {

    const [isFavorite, setIsFavorite] = useState()

    const handleTitle = (e) => {
        setValueTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setValueDescription(e.target.value)
    }

    const cancelEdit = () => {
        setEditingNote(null)
        setValueTitle("")
        setValueDescription("")
    }

    const handleSave = () => {

        if (!valueTitle.trim() && !valueDescription.trim()) {
            return
        }

        if (editingNote) {
            updateNote({...editingNote , title: valueTitle , description: valueDescription})
        }
        else{
            let newNote = {
            id: uuidv4(),
            title: valueTitle,
            description: valueDescription,
            isFavorite: false,
            isDelete: false,
            isPin: false
        }

        console.log(newNote)

        addNote(newNote)
        }
        setValueTitle("")
        setValueDescription("")
    }

    const [valueTitle, setValueTitle] = useState("")
    const [valueDescription, setValueDescription] = useState("")

    useEffect(() => {
      if (editingNote) {
        setValueTitle(editingNote.title)
        setValueDescription(editingNote.description)
    }
    }, [editingNote])

    return (
        <div className={`${settingNoteList == false ? "block" : "hidden"} md:block bg-[#FAFAFA] md:w-[57.5vw] w-[100%] h-[95vh] rounded-r-lg`}>
            <div className='m-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-xl'>Add New Note</h1>
                    <div className='flex gap-4'>
                    {editingNote ? <button onClick={cancelEdit} className='whitespace-nowrap cursor-pointer bg-[#688A9C] text-white px-4 py-2 rounded-lg hover:bg-[#4A6B7D]'>Cancel</button> : ""}
                    <button onClick={handleSave} className='whitespace-nowrap cursor-pointer bg-[#688A9C] text-white px-4 py-2 rounded-lg hover:bg-[#4A6B7D]'>Save Note</button>
                    </div>
                </div>
                <div className='rounded-lg shadow-[0_0_5px_2px_#E6E6E8] my-6'>
                    <input onChange={handleTitle} className='w-[100%] bg-[#FFFFFF] border border-transparent outline-none px-4 py-2 rounded-lg focus:border-blue-800' value={valueTitle} type="text" placeholder='Title' />
                </div>
                <textarea onChange={handleDescription} className='md:h-[66vh] h-[80vh] w-[100%] bg-[#FFFFFF] rounded-lg p-4 shadow-[0_0_5px_2px_#E6E6E8] outline-none resize-none' value={valueDescription} type='text' placeholder='Write your note hear...' />
            </div>
        </div>
    )
}

export default Newnote
