const data = {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '95530000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '001c196b586954db3',
        searchType: 'image',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '95530000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '001c196b586954db3',
        searchType: 'image',
      },
    ],
  },
  context: {
    title: 'go-v3',
  },
  searchInformation: {
    searchTime: 0.494503,
    formattedSearchTime: '0.49',
    totalResults: '95530000000',
    formattedTotalResults: '95,530,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello - Wikipedia',
      htmlTitle: '<b>Hello</b> - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/5/59/-127wiki.jpg',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello - Wikipedia',
      htmlSnippet: '<b>Hello</b> - Wikipedia',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello',
        height: 7979,
        width: 6383,
        byteSize: 7455006,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr18XgpdkAFEfMUC4Kz6D7M0VZ-VSL_25_JOXXJ6Z6HEArbd1gOfpcYc&s',
        thumbnailHeight: 150,
        thumbnailWidth: 120,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'HELLO! - Home | Facebook',
      htmlTitle: '<b>HELLO</b>! - Home | Facebook',
      link: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=89982930077',
      displayLink: 'www.facebook.com',
      snippet: 'HELLO! - Home | Facebook',
      htmlSnippet: '<b>HELLO</b>! - Home | Facebook',
      mime: 'image/',
      fileFormat: 'image/',
      image: {
        contextLink: 'https://www.facebook.com/hello/',
        height: 464,
        width: 464,
        byteSize: 4784,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKybZTrHRJvJ_BdlzT3zp9n6emA3KoqnOyIZHkElznnKES2nNw_yqv-hE&s',
        thumbnailHeight: 128,
        thumbnailWidth: 128,
      },
    },
    {
      kind: 'customsearch#result',
      title:
        'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
      htmlTitle:
        '<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news',
      link: 'https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png',
      displayLink: 'www.hellomagazine.com',
      snippet:
        'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
      htmlSnippet:
        '<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://www.hellomagazine.com/',
        height: 1000,
        width: 1000,
        byteSize: 4800,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXunPheCGfWtZSGK6V4GR963yj0UYHosRVLTBQj9vNMxC1TR-s_0RVbh0&s',
        thumbnailHeight: 149,
        thumbnailWidth: 149,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello - Wikipedia',
      htmlTitle: '<b>Hello</b> - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/640px--127wiki.jpg',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello - Wikipedia',
      htmlSnippet: '<b>Hello</b> - Wikipedia',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello',
        height: 800,
        width: 640,
        byteSize: 146076,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzqAW5yGMwo6M-jPSkPyun0SIW_EQXZD1PzIjA6XNYIOqPPyvJ9hyf1A&s',
        thumbnailHeight: 143,
        thumbnailWidth: 114,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello! | Super Simple Songs - YouTube',
      htmlTitle: '<b>Hello</b>! | Super Simple Songs - YouTube',
      link: 'https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg',
      displayLink: 'www.youtube.com',
      snippet: 'Hello! | Super Simple Songs - YouTube',
      htmlSnippet: '<b>Hello</b>! | Super Simple Songs - YouTube',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://www.youtube.com/watch?v=tVlcKp3bWH8',
        height: 720,
        width: 1280,
        byteSize: 135861,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKXSn3G5-Z0o65o-KSE7hNmVEUmPevQ3vg8zrVVOU8TfOb8sfJPlXtfA&s',
        thumbnailHeight: 84,
        thumbnailWidth: 150,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello - Wikipedia',
      htmlTitle: '<b>Hello</b> - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/1200px--127wiki.jpg',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello - Wikipedia',
      htmlSnippet: '<b>Hello</b> - Wikipedia',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello',
        height: 1500,
        width: 1200,
        byteSize: 540514,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5fY_2kHkUod66OQ21J9y7YjREaFDvwRmuVYmzW6zohmWdn6yV-Ga9Gw&s',
        thumbnailHeight: 150,
        thumbnailWidth: 120,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'hello. Wallpaper — Basic Apple Guy',
      htmlTitle: '<b>hello</b>. Wallpaper — Basic Apple Guy',
      link: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1611591342775-O7PFR5X5UF1YQ560DRN6/Hello1x1.png?format=1000w',
      displayLink: 'basicappleguy.com',
      snippet: 'hello. Wallpaper — Basic Apple Guy',
      htmlSnippet: '<b>hello</b>. Wallpaper — Basic Apple Guy',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://basicappleguy.com/basicappleblog/hello-wallpaper',
        height: 1000,
        width: 1000,
        byteSize: 653757,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_QWknkUdYgoipL44hd1Frcg6M54QlSQinHMBmUq_hQTak5Vh9NGP6No&s',
        thumbnailHeight: 149,
        thumbnailWidth: 149,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello (web series) - Wikipedia',
      htmlTitle: '<b>Hello</b> (web series) - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello (web series) - Wikipedia',
      htmlSnippet: '<b>Hello</b> (web series) - Wikipedia',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello_(web_series)',
        height: 720,
        width: 1280,
        byteSize: 92147,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx4jzovIb8SNQjKWNpToZu3lxLjgh14xk9Kh41V15pPL0bOtBJZGq138&s',
        thumbnailHeight: 84,
        thumbnailWidth: 150,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello Apparel for Adults & Kids',
      htmlTitle: '<b>Hello</b> Apparel for Adults &amp; Kids',
      link: 'http://cdn.shopify.com/s/files/1/1190/4748/t/10/assets/logo.png?v=167108561653742813581641915455',
      displayLink: 'www.helloapparelstore.com',
      snippet: 'Hello Apparel for Adults & Kids',
      htmlSnippet: '<b>Hello</b> Apparel for Adults &amp; Kids',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://www.helloapparelstore.com/',
        height: 300,
        width: 400,
        byteSize: 11446,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y_r7Oj7_pTx039mfgkO4Cex5Esu2zHziPkvDBlevVugrO4X62wUn&s',
        thumbnailHeight: 93,
        thumbnailWidth: 124,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'What Is Windows Hello Sign-in on Windows 10?',
      htmlTitle: 'What Is Windows <b>Hello</b> Sign-in on Windows 10?',
      link: 'https://www.howtogeek.com/wp-content/uploads/2021/01/windows_hello_hero_2.jpg?height=200p&trim=2,2,2,2',
      displayLink: 'www.howtogeek.com',
      snippet: 'What Is Windows Hello Sign-in on Windows 10?',
      htmlSnippet: 'What Is Windows <b>Hello</b> Sign-in on Windows 10?',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink:
          'https://www.howtogeek.com/708986/what-is-windows-hello-sign-in-on-windows-10/',
        height: 592,
        width: 1292,
        byteSize: 21880,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-c8oGtycKpaDGOXcTce6npTfshFOXzBGse0ocwBIvzxoI9hayeSntg&s',
        thumbnailHeight: 69,
        thumbnailWidth: 150,
      },
    },
  ],
};

const response = { data };

export default response;
