import Image from 'next/image';
import { useRouter } from 'next/router';

const HeaderOption = ({ title, icon, handleClick, active }) => {
  return (
    <div
      className={`flex items-center p-2 space-x-1 cursor-pointer hover:border-b-4 hover:border-b-blue-400 hover:text-blue-400 ${
        active
          ? 'border-b-4  border-b-blue-400 text-blue-400 font-semibold'
          : ''
      }`}
      onClick={handleClick}
    >
      <Image src={icon} height={20} width={20} alt="icon" />
      <p>{title}</p>
    </div>
  );
};

export default HeaderOption;
