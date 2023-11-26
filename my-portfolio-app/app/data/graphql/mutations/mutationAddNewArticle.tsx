import { gql } from "@apollo/client";

export const ADD_ARTICLE = gql`
  mutation AddArticle($title: String!, $summary: String!, $content: String!, $mainImage: String!) {
    addArticle(title: $title, summary: $summary, content: $content, mainImage: $mainImage) {
      id
      summary
      title
      mainImage
      content
    }
  }
`;
