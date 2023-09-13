import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark,readingTime}) => {
    return (
        <div className="md:1/3 bg-gray-300 m-4 mt-2 pt-4">
           
           <div>
            <h3 className='text-3xl m-5 p-5 bg-red-200'>Reading Time {readingTime}</h3>
           </div>
            <h2 className="text-4xl p-4 m-4 text-center ">Bookmarked blogs :{bookmark.length}</h2>
            {
                bookmark.map(book => <Bookmark key={bookmark.id}
                book={book}
                >

                </Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmark: PropTypes.object.isRequired,
    readingTime:PropTypes.number
  
}
export default Bookmarks;