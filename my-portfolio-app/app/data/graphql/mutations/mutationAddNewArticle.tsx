import { gql } from "@apollo/client";

export const ADD_ARTICLE = gql`
  mutation CreateArticle($title: String!, $summary: String!, $content: String!, $imageUrl: String!) {
    createArticle(input: {title: $title, summary: $summary, content: $content, imageUrl: $imageUrl}) {
      
      summary
      title
      imageUrl
      content
    }
  }
`;
