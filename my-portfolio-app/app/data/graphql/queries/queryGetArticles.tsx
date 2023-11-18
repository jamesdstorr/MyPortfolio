import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      id
      summary
      title
      mainImage
    }
  }
`;