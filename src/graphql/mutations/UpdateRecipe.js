import { gql } from 'apollo-boost';

export default gql`muttion UpdateRecipe(
    $id: ID!
    $directions: String!
    $title: String!
    $ingredients: String!
    $published: Boolean
  ) {
    updateRecipe (
      where: {id: $id}
      data: {
        directions: $directions
        title: $title
        inngredients: $ingredients
        published: $published
      }
    ) {
      id
    }
  }
`;