import { ApolloError } from "@apollo/client";

export type BlogArticle = {
  id: string;
  title: string;
  summary: string;
  mainImage?: string;
  content: string;
};

export type BlogListArticles = {
  articles: BlogArticle[];
};


export type AddArticleResponse = {
  addArticle: {
    id: string;
    mainImage: string;
    summary: string;
    title: string;
    content: string;
  };
}

