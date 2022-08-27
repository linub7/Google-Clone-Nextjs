import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LeftIcon from 'public/icons/left.svg';
import RightIcon from 'public/icons/right.svg';
const PaginationButtons = () => {
  const {
    query: { term, searchType, start },
  } = useRouter();
  const startIndex = Number(start) || 1;
  return (
    <div className="flex items-center p-2 my-2 space-x-12">
      {startIndex !== 1 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex - 10
          }`}
          passHref
        >
          <div className="flex items-center cursor-pointer text-blue-400 hover:underline">
            <Image src={LeftIcon} width={25} height={25} alt={'previous'} />
            <p className="-translate-y-[0.125rem]">Prev</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex + 10
          }`}
          passHref
        >
          <div className="flex items-center cursor-pointer text-blue-400 hover:underline">
            <p className="-translate-y-[0.125rem]">Next</p>
            <Image src={RightIcon} width={25} height={25} alt={'next'} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
