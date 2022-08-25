import HeaderOption from './HeaderOption';
import SearchIcon from 'public/icons/search.svg';
import ImageIcon from 'public/icons/image.svg';
import { useRouter } from 'next/router';

const HeaderOptions = ({ handleClickAll, handleClickImage }) => {
  const {
    query: { searchType },
  } = useRouter();

  return (
    <div className="flex justify-center space-x-8 select-none w-full text-sm text-gray-700 border-b lg:pl-52 lg:justify-start">
      <HeaderOption
        title={'All'}
        icon={SearchIcon}
        handleClick={handleClickAll}
        active={!searchType ? true : false}
      />
      <HeaderOption
        title={'Images'}
        icon={ImageIcon}
        handleClick={handleClickImage}
        active={searchType === 'images' ? true : false}
      />
    </div>
  );
};

export default HeaderOptions;
