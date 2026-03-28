import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="group relative glass glass-hover rounded-3xl p-1 overflow-hidden cursor-pointer flex flex-col h-full w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      {recipe.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-2 shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-8 relative z-10 flex flex-col flex-1 text-left">
        <div className="flex justify-between items-start mb-6">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-amber-700 ring-1 ring-inset ring-amber-500/20">
            {recipe.category || "Healthy"}
          </span>
          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{recipe.calories} kcal</span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {recipe.title}
        </h2>

        <div className="mt-auto pt-6">
          <Link to={`/recipe/${recipe.id}`} className="block w-full" onClick={onSelect}>
            <button className="w-full relative overflow-hidden rounded-xl bg-slate-900 px-6 py-3 transition-all duration-300 hover:bg-amber-600 text-white text-sm font-bold uppercase tracking-widest cursor-pointer shadow-lg shadow-slate-200">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
