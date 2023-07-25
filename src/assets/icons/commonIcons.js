import { BiSearch } from 'react-icons/bi';
import { BsPerson, BsArrowLeft } from 'react-icons/bs';

const Search = () => {
    return <BiSearch />;
};
const User = () => {
    return <BsPerson />;
};
const ArrowLeft = () => {
    return <BsArrowLeft />;
};

const Icon = { Search, User, ArrowLeft };

export default Icon;
