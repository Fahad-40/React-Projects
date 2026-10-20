import React from 'react'

const Sidebar = ({favoriteNotes , allNotes , setView , view , changeSettingHandle}) => {
  return (
    <div>
      <div className='flex flex-col bg-[#465163] text-white w-[10vw] h-[95vh] rounded-l-lg'>
        <button className='hidden md:block whitespace-nowrap cursor-pointer bg-[#688A9C] text-white m-4 mb-6 px-4 py-2 rounded-lg hover:bg-[#4A6B7D]'>New Note</button>
        <button onClick={changeSettingHandle} className='md:hidden whitespace-nowrap cursor-pointer bg-[#688A9C] text-white m-4 mb-6 md:px-4 md:py-2 px-2 py-2 rounded-lg hover:bg-[#4A6B7D]'><i className="fa-regular fa-pen-to-square"></i></button>
        <div>
        <div onClick={() => setView("all")} className={`flex md:pl-4 my-4 py-2 items-center gap-2 cursor-pointer hover:bg-[#5B6777] focus-within:bg-[#5B6777] ${view == "all" ? "bg-[#5B6777]" : "bg-transparent"}`}>
            <i className="fa-regular fa-note-sticky"></i>
            <p className='hidden md:block'>All Notes</p>
        </div>
        <div onClick={() => setView("favorite")} className={`flex md:pl-4 my-4 py-2 items-center gap-2 cursor-pointer hover:bg-[#5B6777] focus-within:bg-[#5B6777] ${view == "favorite" ? "bg-[#5B6777]" : "bg-transparent"}`}>
            <i className="fa-regular fa-star"></i>
            <p className='hidden md:block'>Favourites</p>
        </div>
        <div onClick={() => setView("trash")} className={`flex md:pl-4 my-4 py-2 items-center gap-2 cursor-pointer hover:bg-[#5B6777] focus-within:bg-[#5B6777] ${view == "trash" ? "bg-[#5B6777]" : "bg-transparent"}`}>
            <i className="fa-regular fa-trash-can"></i>
        <p className='hidden md:block'>Trash</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
