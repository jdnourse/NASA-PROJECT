const DEFAULT_PAGE_NUMBER = 1; // In Mongo, if limit is not set, all items are returned
const DEFAULT_PAGE_LIMIT = 0; // In Mongo, if limit is not set, all items are returned

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER; //Math.abs method will return number from string
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
