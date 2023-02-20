const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(
  'SeraApiKey'
);
const email = require('./email');

const params = {
  q: 'Junior Software Developer Jobs',
  hl: 'en',
  gl: 'eg',
  google_domain: 'google.com.eg',
  num: 100,
  location: 'Egypt',
};

search.json(params, (data) => {
  try {
    let result;

    data.organic_results.forEach((el) => {
      result += `${el.title} : ${el.link}` + '\n';
    });

    const send = async (data) => {
      await email.main(data);
    };
    send(result);
  } catch (err) {
    console.error(err);
  }
});
