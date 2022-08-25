import User from 'components/home-page/headerComponents/User';
import Image from 'next/image';
import GoogleLogo from 'public/images/google-logo-1.jpg';
import SearchIcon from 'public/icons/search.svg';
import MicIcon from 'public/icons/mic.svg';
import CloseIcon from 'public/icons/close.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeaderOptions from './HeaderOptions';

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

    router.push(`/search?term=${searchTerm}&searchType=`);
  };

  const handleTabSelect = (tab) => {
    router.push(`/search?term=${term}&searchType=${tab}`);
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
      <HeaderOptions
        handleClickAll={() => handleTabSelect('')}
        handleClickImage={() => handleTabSelect('images')}
      />
    </header>
  );
};

export default SearchPageHeader;
