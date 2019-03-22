import { gql } from "apollo-boost";

export default gql`query GetAllPublishedRecipes {
  recipeps(where: { published: true}) {
    id
    create_at
    title
    ingredients
    directions
    published
  }
}`;