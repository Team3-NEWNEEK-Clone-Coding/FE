import { BiSearch } from 'react-icons/bi';
import { BsPerson, BsArrowLeft } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';

const Search = () => {
    return <BiSearch />;
};
const User = () => {
    return <BsPerson />;
};
const ArrowLeft = () => {
    return <BsArrowLeft />;
};
const Logout = () => {
    return <GrLogout />;
};




const Icon = { Search, User, ArrowLeft, Logout };

export default Icon;
