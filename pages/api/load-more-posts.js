import { getAllPosts, getInThePressPosts, getSearchResults, getCategoryPosts, getAuthorPosts, getTagPosts } from "@lib/api";

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const { isInThePressContent, isSearchContent, isAuthorContent, isTagContent, isCategoryContent, currentLanguage, endCursor, data } = body;

  if (req.method === "POST") {
    const response = 
    isInThePressContent ? 
      await getInThePressPosts(currentLanguage, 5, `"${endCursor}"`) : 
    isSearchContent ? 
      await getSearchResults(currentLanguage, 5, `"${endCursor}"`, data)
    :
    isAuthorContent ?
      await getAuthorPosts(currentLanguage, 6, `"${endCursor}"`, data)
    :
    isTagContent ?
      await getTagPosts(currentLanguage, 6, `"${endCursor}"`, data)
    :
    isCategoryContent ?
      await getCategoryPosts(currentLanguage, 6, `"${endCursor}"`, data)
    :
      await getAllPosts(currentLanguage, 6, `"${endCursor}"`, "");

    return res.json({ data: response });
  } else {
    return res.status(500).end();
  }
};