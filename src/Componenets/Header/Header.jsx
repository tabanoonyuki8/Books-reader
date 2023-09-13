import profile from "../../assets/images/profile2.jpg.jpg"
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h2 className="text-5xl font-bold ">Book lovers</h2>
            <img className="w-16 h-16 rounded" src={profile} alt="" />
        </div>
    );
};

export default Header;