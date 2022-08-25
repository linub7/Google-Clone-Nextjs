import SearchPageHeader from 'components/search-page/headerComponent';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import response from 'Response';
import SearchResults from 'components/search-page/resultComponent';

const Search = ({ results }) => {
  const {
    query: { term, searchType },
  } = useRouter();

  console.log(results);
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
      <SearchResults results={results} />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const mockData = true;
  const { data } = mockData
    ? response
    : await axios.get(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.API_KEY
      }&cx=${process.env.CXT_KEY}&q=${query.term}${
        query.searchType ? `&searchType=image` : ''
      }
  `);

  return {
    props: {
      results: data,
    },
  };
}

export default Search;
