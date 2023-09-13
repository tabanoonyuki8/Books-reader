
import { useState } from 'react'
import './App.css'
import Blogs from './Componenets/Blogs/Blogs'
import Bookmarks from './Componenets/Booksmarks/Bookmarks'
import Header from './Componenets/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleMark= (time)=>{
  setReadingTime(readingTime + time);
  // const removeBookMarks= bookmark.filter(bookmark => bookmark.id !== id);
  // setReadingTime(removeBookMarks);
  
  }
  const handleBookmark= blog =>{
      const newBookmarl=[...bookmark,blog];
      setBookmark(newBookmarl);
   
  }

  return (
    <>
     <Header></Header>
<div className='md:flex max-w-7xl mx-auto'>
<Blogs handleMark={handleMark} handleBookmark={handleBookmark}></Blogs>
<Bookmarks 
readingTime={readingTime} bookmark={bookmark}></Bookmarks>
</div>
 
      
      
    </>
  )
}

export default App
