import SearchPageHeader from 'components/search-page/headerComponent';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Search = () => {
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
    </div>
  );
};

export default Search;
