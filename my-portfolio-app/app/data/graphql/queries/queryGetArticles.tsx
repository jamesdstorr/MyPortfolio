import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    getAllArticles {
      _id
      summary
      title
      imageUrl
      content
    }
  }
`;