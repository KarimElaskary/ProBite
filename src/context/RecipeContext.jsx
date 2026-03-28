import React, { createContext, useContext, useState, useMemo } from "react";
import getRecipes, { getCategories } from "../data/data";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes] = useState(getRecipes());
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState(null);

  const categories = useMemo(() => getCategories(), []);

  const filteredRecipes = useMemo(() => {
    if (!filter) return recipes;
    return recipes.filter(r => r.category && r.category.includes(filter));
  }, [recipes, filter]);

  const getRecipeById = (id) =>
    recipes.find((r) => r.id === parseInt(id));

  return (
    <RecipeContext.Provider
      value={{ 
        recipes: filteredRecipes, 
        allRecipes: recipes,
        categories, 
        filter, 
        setFilter, 
        selectedRecipe, 
        setSelectedRecipe, 
        getRecipeById 
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
