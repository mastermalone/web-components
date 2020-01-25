/**
 * @summary Native Javascript fetch API for calling external files
 */
const FetchService = () => {
  const get = async url => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };

  return {
    get: get
  };
};

export default FetchService();
