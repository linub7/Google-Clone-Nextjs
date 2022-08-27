/* eslint-disable @next/next/no-img-element */

const ImageSearchItem = ({ result }) => {
  return (
    <div className="mb-8">
      <div className="group">
        <a href={result?.image?.contextLink}>
          <img
            src={result?.link}
            alt={result?.title}
            className="group-hover:shadow-xl w-full h-60 object-contain md:object-cover rounded-sm"
          />
        </a>
        <a className="group-hover:underline" href={result?.image?.contextLink}>
          <h2 className="truncate text-xl ">{result?.title}</h2>
        </a>
        <a className="group-hover:underline" href={result?.image?.contextLink}>
          <p className="text-gray-600 text-sm">{result?.displayLink}</p>
        </a>
      </div>
    </div>
  );
};

export default ImageSearchItem;
