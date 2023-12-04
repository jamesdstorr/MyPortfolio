import { gql } from '@apollo/client';

export const GET_ARTICLE = gql`
  query GetArticle($id: String!) {
    getArticleById(id: $id) {
      id
      title
      summary
      imageUrl
      content
    }
  }
`;