import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './Component/Pages/Notes'
import CreateNote from './Component/Pages/CreateNote'
import EditNote from './Component/Pages/EditNote'
// import dummy_notes from './dummy-notes'

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])




  return (
    <>
   <main id='app'>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Notes notes={notes}/>}/>
      <Route path='/create-note' element={<CreateNote setNotes={setNotes} />}/>
      <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>}/>
    </Routes>
    </BrowserRouter>
   </main>
    </>
  )
}

export default App