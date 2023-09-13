import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleBookmark,handleMark}) => {
    const [blogs,setBlogs]=useState([]);
  
    useEffect(()=>{
 fetch('blogs.json')
 .then (res => res.json())
 .then (data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-5xl">blogs: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleMark={handleMark}
                handleBookmark={handleBookmark}
                    ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes={
   
    handleBookmark:PropTypes.func,
    handleMark:PropTypes.func
}
export default Blogs;