import { gql } from '@apollo/client';

export const HELLO_QUERY = gql`
  query HelloQuery {
    hello {
      message
    }
  }
`;
