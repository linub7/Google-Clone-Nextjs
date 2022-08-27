import PaginationButtons from '../resultComponent/PaginationButtons';
import ImageSearchItem from './ImageSearchItem';

const ImageSearchResult = ({ results }) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-3 ">
        {results?.items?.map((result, index) => (
          <ImageSearchItem key={index} result={result} />
        ))}
      </div>
      <div>
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageSearchResult;
