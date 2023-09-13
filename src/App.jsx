
import './App.css'
import Blogs from './Componenets/Blogs/Blogs'
import Bookmarks from './Componenets/Booksmarks/Bookmarks'
import Header from './Componenets/Header/Header'

function App() {
  

  return (
    <>
     <Header></Header>
<div className='md:flex'>
<Blogs></Blogs>
<Bookmarks></Bookmarks>
</div>
 
      
      
    </>
  )
}

export default App
