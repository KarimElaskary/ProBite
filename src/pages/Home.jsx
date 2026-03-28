import React from "react";
import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

const Home = () => {
  const { recipes, categories, filter, setFilter, setSelectedRecipe } = useRecipes();

  return (
    <main className="min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <section className="py-20 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
               <span className="text-gradient">Recipes</span>
              </h2>
            </div>
            <div className="h-px flex-1 bg-slate-200 mb-6 hidden md:block mx-8"></div>
            <div className="flex gap-4">
              <span className="px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-widest text-amber-600">
                {recipes.length} Recipes Found
              </span>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
            <button
              onClick={() => setFilter(null)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === null
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-200 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 capitalize ${
                  filter === category
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-200 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {recipes.map((recipe, index) => {
              const isLast = index === recipes.length - 1;
              const countMatch = recipes.length % 3 === 1;
              const smCountMatch = recipes.length % 2 === 1;

              return (
                <div 
                  key={recipe.id} 
                  className={`flex ${isLast && countMatch ? "lg:col-start-2" : ""} ${isLast && smCountMatch ? "sm:max-md:col-span-2 sm:max-md:flex justify-center" : ""}`}
                >
                  <div className={isLast && smCountMatch ? "w-full md:w-full sm:max-md:max-w-[calc(50%-1rem)] flex" : "w-full flex"}>
                    <RecipeCard
                      recipe={recipe}
                      onSelect={() => setSelectedRecipe(recipe)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
