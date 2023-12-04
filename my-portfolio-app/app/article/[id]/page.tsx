"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../../data/graphql/apolloClient";
import BlogArticle from "@/app/components/BlogArticle";

export default function Article({ params }: { params: { id: string } }){
  return (
    <ApolloProvider client={client}>
      <BlogArticle id={params.id} />
    </ApolloProvider>
  );
};


