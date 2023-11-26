"use client"
import React from "react";
import AdminNewArticle from "../components/AdminNewArticle";
import { ApolloProvider } from "@apollo/client";
import client from "../data/graphql/apolloClient";

const Admin = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <AdminNewArticle />
      </ApolloProvider>
    </div>
  );
};

export default Admin;
