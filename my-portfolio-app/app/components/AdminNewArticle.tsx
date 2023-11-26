"use client"
import React from "react";
import dynamic from "next/dynamic";
const NoSSREditor = dynamic(() => import("./ArticleEditor"), {
  ssr: false,
});

const AdminNewArticle = () => {
  return (
    <div>
      <NoSSREditor />
    </div>
  );
};

export default AdminNewArticle;
