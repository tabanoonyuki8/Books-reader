import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleBookmark,handleMark }) => {
  const {title,cover,reading_time,author,author_img,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of contan ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                  <img className='w-14' src={author_img} alt="" />
                 <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <h4>{posted_date}</h4>

                 </div>
                </div>
                <div>
           <span>{reading_time} min read</span>
           <button onClick={()=>handleBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'> {title}</h2>
            <p>
                {
                    hashtags.map((hastag,idx)=> <span key={idx}><a href="">#{hastag}</a></span>)
                }
                <br/>
                <button onClick={()=>handleMark(reading_time)} className='text-purple-800 font-bold'>Mark as read</button>
            </p>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmark:PropTypes.func,
    handleMark: PropTypes.func
}
export default Blog;