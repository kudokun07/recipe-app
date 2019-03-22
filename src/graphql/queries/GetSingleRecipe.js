import { gql } from 'apollo-boost';

export default gql`query GetSingleRecipe($recipeId: ID!) {
  recipe(where: {id: $recipeId}) {
    id
    create_at
    title
    directions
    ingredients
    published
  }
}`;