import Recipe from "../../models/recipe/recipe";
import RecipeCategory from "../../models/recipe/recipeCategory";

// The root provides a resolver function for each API endpoint
const root = {
  getRecipe: (id: number): Recipe => {
    const category = new RecipeCategory(1, "testCategory");
    return new Recipe(id, "test", "testDesc", new Date(), 1, category);
  },
};

export default root;
