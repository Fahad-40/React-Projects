import React from 'react'
import Newnote from './Newnote'
import { useState } from 'react'

const Notelist = ({ notes, deleteNotePermanent, startEdit, favorite, handleDeleteNote, restoreNote , isPinned , searchHandler , searchText , settingNoteList }) => {
    return (
        <div>
            <div className=' bg-[#F4F5F7] md:w-[30vw] w-[100%] h-[95vh] overflow-auto scrollbar-hide'>
                <div className={`${settingNoteList == true ? "block" : "hidden"} md:block m-4`}>
                    <h1 className='font-bold text-xl'>Notes List</h1>
                    <div className='flex items-center w-fit rounded-lg shadow-[0_0_5px_2px_#E6E6E8] my-6 border border-transparent focus-within:border-blue-800'>
                        <i className="pl-2 fa-solid fa-magnifying-glass"></i>
                        <input onChange={(e) => searchHandler(e)} className='outline-none px-4 py-2 rounded-lg md:w-[20vw] w-[70vw]' value={searchText} type="text" placeholder='Search by title or content...' />
                    </div>
                    <h1 className='mb-4'>Recent Notes</h1>

                    <div>
                        {notes.length == 0 ? <div>No Notes</div> : ""}
                        {notes.map((item) => {
                            return (
                                <div key={item.id} className='p-2 rounded-xl mb-4 border border-transparent hover:border-blue-800 hover:bg-[#EDF5F6] shadow-[0_0_5px_5px_#E6E6E8]'>
                                    <div>
                                        <h1 className='break-words text-xl font-bold'>{item.title}</h1>
                                        <p className='break-words'>{item.description}</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='cursor-pointer'>
                                            {item.isDelete == false && (item.isFavorite ? (<i onClick={() => favorite(item)} className="text-[#6A8E97] fa-solid fa-star"></i>)
                                                : (<i onClick={() => favorite(item)} className="fa-regular fa-star"></i>))}
                                            
                                        </div>
                                        <div className='flex gap-2'>
                                            {item.isDelete == false && (
                                                <div className='flex gap-2'>
                                                <i onClick={() => isPinned(item)} className={`cursor-pointer fa-solid fa-thumbtack ${item.isPin ? "text-[#6A8E97]" : ""}`}></i>
                                            <i onClick={() => startEdit(item)} className="cursor-pointer fa-solid fa-pencil"></i>
                                            </div>
                                            ) }

                                            {item.isDelete && <i onClick={() => restoreNote(item.id)} className="cursor-pointer fa-solid fa-trash-arrow-up"></i>}
                                            {item.isDelete ? <i onClick={() => deleteNotePermanent(item.id)} className="cursor-pointer fa-regular fa-trash-can"></i> : <i onClick={() => handleDeleteNote(item)} className="cursor-pointer fa-regular fa-trash-can"></i>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notelist
