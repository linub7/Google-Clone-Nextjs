import Image from 'next/image';
import GoogleLogo from 'public/images/google-logo-1.jpg';
import SearchIcon from 'public/icons/search.svg';
import MicIcon from 'public/icons/mic.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Body = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleChangeInput = (e) => setSearchTerm(e.target.value);

  const handlePressEnter = (e) => {
    if (e.code === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    router.push(`/search?term=${searchTerm.trim()}&searchType=`);
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto w-9/12 space-y-7 mt-24">
      <div className="mx-auto w-6/12">
        <Image
          src={GoogleLogo}
          layout="intrinsic"
          alt="Google"
          className="object-cover"
        />
      </div>
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 hover:shadow-lg focus-within:shadow-lg">
        <Image src={SearchIcon} height={18} width={18} alt="search" />
        <input
          type="text"
          className="w-full outline-none ml-2"
          value={searchTerm}
          onChange={handleChangeInput}
          onKeyDown={handlePressEnter}
        />
        <Image src={MicIcon} height={18} width={18} alt="microphone" />
      </div>

      <br />

      <div className="flex justify-center space-x-5">
        <button className="custom-btn">Google Search</button>
        <button className="custom-btn">{"I'm feeling lucky"}</button>
      </div>
    </form>
  );
};

export default Body;
