/**
 * @param {Map} postPages
 * @return {[number, Object[]][]} sorted post pages by sorted years
 */
module.exports = function getPostPagesByYear(postPages) {
  const postPagesByYear = new Map();

  for (const page of postPages) {
    const year = page.metadata.publicationDate.getFullYear();
    const existingYearPosts = postPagesByYear.get(year);

    postPagesByYear.set(year, (existingYearPosts || []).concat(page));
  }

  const sortedYears = Array.from(postPagesByYear.entries()).sort(
    ([yearA], [yearB]) => yearB - yearA,
  );

  sortedYears.forEach(([, posts]) => {
    posts.sort(
      (a, b) => b.metadata.publicationDate - a.metadata.publicationDate,
    );
  });

  return sortedYears;
};
