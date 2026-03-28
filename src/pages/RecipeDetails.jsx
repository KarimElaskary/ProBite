import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const { selectedRecipe, getRecipeById } = useRecipes();

  const recipe =
    selectedRecipe?.id === parseInt(id) ? selectedRecipe : getRecipeById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="text-6xl animate-bounce">🥗</div>
        <p className="text-2xl font-bold text-amber-500 text-center">
          Oops! Recipe not found.
        </p>
        <Link to="/">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-amber-900/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Return to Kitchen
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="container mx-auto px-4 pt-6 max-w-5xl">
        {/* Back Button - Ghost Style */}
        <Link to="/" className="inline-block group mb-6">
          <div className="flex items-center gap-2 text-slate-400 group-hover:text-amber-600 transition-colors duration-300 font-bold text-sm">
            <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            <span>BACK TO RECIPES</span>
          </div>
        </Link>

        {/* Glassmorphism Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/5 to-transparent rounded-3xl blur-xl opacity-10 transition duration-1000 group-hover:opacity-20"></div>

          <div className="relative glass rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 text-center md:text-left border-white/50">
            {/* Image Section */}
            {recipe.image && (
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-60"></div>
              </div>
            )}

            {/* Header Section */}
            <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-br from-white/50 to-transparent">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 text-left">
                  <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Gourmet & Healthy
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tighter">
                    {recipe.title}
                  </h1>
                </div>

                <div className="flex flex-row items-center glass p-3 rounded-2xl gap-4 bg-white/50">
                  <div className="text-left border-r border-slate-200 pr-4 mr-1">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block">
                      Energy
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-amber-600 leading-none">
                        {recipe.calories.split(" ")[0]}
                      </span>
                      <span className="text-slate-400 font-bold text-[10px] uppercase">
                        kcal
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block">
                      Category
                    </span>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">
                      {recipe.category || "Main Dish"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className="p-6 md:p-8 grid lg:grid-cols-5 gap-8 lg:gap-12"
              dir="rtl"
            >
              {/* Ingredients - 2 Columns */}
              <section className="lg:col-span-2">
                <div className="flex flex-row items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-xl">🛒</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    المكونات
                  </h2>
                </div>

                <div className="bg-white/40 rounded-2xl p-6 border border-white/60 h-full">
                  <ul className="space-y-4 text-right">
                    {recipe.ingredients
                      .split("\n")
                      .filter(
                        (line) => line.trim() && !line.includes("المكونات"),
                      )
                      .map((item, idx) => (
                        <li
                          key={idx}
                          className="flex flex-row items-center gap-3 text-slate-600 leading-relaxed text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </section>

              {/* Instructions - 3 Columns */}
              <section className="lg:col-span-3">
                <div className="flex flex-row items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                    <span className="text-xl">👨‍🍳</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    طريقة التحضير
                  </h2>
                </div>

                <div className="bg-white/20 rounded-2xl p-6 border border-white/40 space-y-6">
                  {recipe.instructions
                    .split("\n")
                    .filter(
                      (line) => line.trim() && !line.includes("طريقة التحضير"),
                    )
                    .map((step, idx) => (
                      <div
                        key={idx}
                        className="flex flex-row items-start gap-5 group/step text-right border-b border-slate-100 last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 font-black text-sm shrink-0 shadow-sm group-hover/step:border-amber-400/50 transition-colors duration-300">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="text-slate-600 leading-relaxed text-base pt-1">
                          {step}
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
