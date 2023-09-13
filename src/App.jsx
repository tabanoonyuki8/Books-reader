
import { useState } from 'react'
import './App.css'
import Blogs from './Componenets/Blogs/Blogs'
import Bookmarks from './Componenets/Booksmarks/Bookmarks'
import Header from './Componenets/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([]);
  const handleBookmark=blog=>{
         console.log("adding");
  }

  return (
    <>
     <Header></Header>
<div className='md:flex max-w-7xl mx-auto'>
<Blogs handleBookmark={handleBookmark}></Blogs>
<Bookmarks></Bookmarks>
</div>
 
      
      
    </>
  )
}

export default App
