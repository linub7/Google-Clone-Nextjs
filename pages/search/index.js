import SearchPageHeader from 'components/search-page/headerComponent';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import response from 'Response';
import SearchResults from 'components/search-page/resultComponent';
import ImageSearchResult from 'components/search-page/imageSearchResult';

const Search = ({ results }) => {
  const {
    query: { term, searchType },
  } = useRouter();

  return (
    <div>
      <Head>
        <title>{term} - Search Page</title>
        <meta
          name="description"
          content={`${term} searched result by google`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <SearchPageHeader term={term} />

      {/* Search Result */}
      {!searchType ? (
        <SearchResults results={results} />
      ) : (
        <ImageSearchResult results={results} />
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const startIndex = query?.start || '1';
  const mockData = false;
  const { data } = mockData
    ? response
    : await axios.get(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.API_KEY
      }&cx=${process.env.CXT_KEY}&q=${query.term}${
        query.searchType ? `&searchType=image` : ''
      }&start=${startIndex}
  `);

  return {
    props: {
      results: data,
    },
  };
}

export default Search;
