import { ApolloError } from "@apollo/client";

export type BlogArticle = {
  id: string;
  title: string;
  summary: string;
  mainImage?: string;
};

export type BlogListArticles = {
  articles: BlogArticle[];
};

