import User from 'components/home-page/headerComponents/User';
import Image from 'next/image';
import GoogleLogo from 'public/images/google-logo-1.jpg';
import SearchIcon from 'public/icons/search.svg';
import MicIcon from 'public/icons/mic.svg';
import CloseIcon from 'public/icons/close.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchPageHeader = ({ term }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setSearchTerm(term);

    return () => {
      setSearchTerm([]);
    };
  }, [term]);

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    router.push(`/search?term=${searchTerm}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          className="cursor-pointer"
          onClick={() => router.push('/')}
          src={GoogleLogo}
          height={40}
          width={120}
          alt="google"
          objectFit="contain"
        />
        <form
          onSubmit={handleSubmit}
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full focus:outline-none"
          />
          <div className="mr-5" onClick={() => setSearchTerm('')}>
            <Image
              src={CloseIcon}
              height={22}
              width={22}
              alt="close"
              className="cursor-pointer"
            />
          </div>

          <div className="border border-l-gray-300 h-8 mr-2"></div>

          <div className="hidden md:block">
            <Image
              src={MicIcon}
              height={22}
              width={22}
              alt="microphone"
              className="cursor-pointer"
            />
          </div>
          <div className="hidden md:block ml-1">
            <Image
              src={SearchIcon}
              height={22}
              width={22}
              alt="search"
              className="cursor-pointer"
            />
          </div>
        </form>
        <div className="ml-auto white">
          <User />
        </div>
      </div>
    </header>
    // <div className="flex justify-between items-center mt-4">
    //   <div className="flex justify-between items-center space-x-3 w-2/3">
    //     <Image src={GoogleLogo} height={30} width={130} alt="google" />
    //     <div className="flex items-center border w-full border-gray-300 rounded-full px-3 py-2 hover:shadow-lg focus-within:shadow-lg">
    //       <input type="text" className="w-full outline-none ml-2" />
    //       <Image src={CloseIcon} height={18} width={18} alt="close" />
    //       <Image src={MicIcon} height={18} width={18} alt="microphone" />
    //       <Image src={SearchIcon} height={18} width={18} alt="search" />
    //     </div>
    //   </div>
    //   <div>
    //     <User />
    //   </div>
    // </div>
  );
};

export default SearchPageHeader;
