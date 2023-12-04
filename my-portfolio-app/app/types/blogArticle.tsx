import { ApolloError } from "@apollo/client";

export type BlogArticle = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  content: string;
};

export type BlogListArticles = {
  getAllArticles: BlogArticle[];
};


export type AddArticleResponse = {
  createArticle: {
    id: string;
    imageUrl: string;
    summary: string;
    title: string;
    content: string;
  };
}

export type GetArticleResponse = {
  getArticleById: {
    id: string;
    imageUrl: string;
    summary: string;
    title: string;
    content: string;
  };
}


