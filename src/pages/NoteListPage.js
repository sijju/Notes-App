import React,{useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import { useParams } from 'react-router-dom'
const NoteListPage = () => {

  const [notes,setNotes] = useState([])
 
  useEffect(()=>{
         getNotes()
  },[notes.id])
 

  let getNotes = async() => {
     let response = await fetch("/api/notes/")
     let data = await response.json()
     
     setNotes(data)
  }

  


  return (
   
      <div className='notes'>
      <div className='notes-header'>
         <h2 className='notes-title'>&#9782; Notes</h2>
         <p className='notes-count'>{notes.length}</p>
      </div>
        <div className='notes-list'>
            {notes.map((user,note,index) => (
                <ListItem key={index} note={note} user={user}/>
            ))}
        </div>
        <div>
          <AddButton/>
        </div>
    </div>

  )
}

export default NoteListPage