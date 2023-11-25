import React from "react";
import { BlogListArticles } from "../types/blogArticle";
import style from "../../styles/Blog.module.css";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../data/graphql/queries/queryGetArticles";

const BlogNav = () => {
  const { loading, error, data } = useQuery<BlogListArticles>(GET_ARTICLES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log(data?.articles);
  return (
    <div>
      <ul>
        {data?.articles.map((article, index) => {
          return (
            <li key={article.id}>
              <div className={style.blogListItem}>
                <img
                  src={article.mainImage}
                  alt={article.title}
                  className={style.blogListImage}
                />
                <div className={style.blogListDetail}>
                  <h1 className="text-2xl pb-2">{article.title}</h1>
                  <div>{article.summary}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogNav;
