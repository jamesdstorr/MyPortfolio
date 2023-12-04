"use client";
import React from "react";
import useGetArticle from "../hooks/useGetArticle";
import style from "../../styles/Blog.module.css";

const BlogArticle = (props: any) => {
  const { loading, error, data, getArticleById } = useGetArticle();

  React.useEffect(() => {
    getArticleById(props.id);
  }, [props.id, getArticleById]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);
  return (
    <div className={style.blogPage}>
      <div className={style.blogArticle}>
        <h1>{data?.getArticleById.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.getArticleById.content || "",
          }}
        />
      </div>
    </div>
  );
};

export default BlogArticle;
