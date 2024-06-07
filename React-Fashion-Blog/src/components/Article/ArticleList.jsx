import ArticleListItem from "../Article/ArticleListItem";
import {blogs} from "../../data/blogs";

function ArticleList() {
  return (
    <>
    

      <ArticleListItem blog={blogs[0]} />

      <ArticleListItem blog={blogs[1]} />

    </>
  );
}

export default ArticleList;