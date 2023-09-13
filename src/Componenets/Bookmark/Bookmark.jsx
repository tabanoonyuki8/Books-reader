import PropTypes from 'prop-types';

const Bookmark = ({book}) => {
    const {title}=book;
    return (
        <div>
            <h3 className='text-3xl p-4 m-4 bg-slate-200 rounded-xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    book: PropTypes.object.isRequired,
  
}
export default Bookmark;