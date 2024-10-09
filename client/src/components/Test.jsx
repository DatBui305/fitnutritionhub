// src =
//   "https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg";

import React, { useState } from "react";

function Test() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    recipes: [],
    exercises: [],
  });
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    duration: "",
  });

  const handleAddRecipe = () => {
    setPost({ ...post, recipes: [...post.recipes, newRecipe] });
    setNewRecipe({ name: "", ingredients: "", instructions: "" }); // Reset the recipe input
  };

  const handleAddExercise = () => {
    setPost({ ...post, exercises: [...post.exercises, newExercise] });
    setNewExercise({ name: "", description: "", duration: "" }); // Reset the exercise input
  };

  const handleChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        placeholder="Content"
      />
      <div>
        <h3>Add Recipe</h3>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={(e) => handleChange(e, setNewRecipe)}
          placeholder="Recipe Name"
        />
        <input
          type="text"
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => handleChange(e, setNewRecipe)}
          placeholder="Ingredients"
        />
        <input
          type="text"
          name="instructions"
          value={newRecipe.instructions}
          onChange={(e) => handleChange(e, setNewRecipe)}
          placeholder="Instructions"
        />
        <button type="button" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </div>
      <div>
        <h3>Add Exercise</h3>
        <input
          type="text"
          name="name"
          value={newExercise.name}
          onChange={(e) => handleChange(e, setNewExercise)}
          placeholder="Exercise Name"
        />
        <input
          type="text"
          name="description"
          value={newExercise.description}
          onChange={(e) => handleChange(e, setNewExercise)}
          placeholder="Description"
        />
        <input
          type="text"
          name="duration"
          value={newExercise.duration}
          onChange={(e) => handleChange(e, setNewExercise)}
          placeholder="Duration"
        />
        <button type="button" onClick={handleAddExercise}>
          Add Exercise
        </button>
      </div>
      {/* You might have a submit button here to handle the final post submission */}
    </form>
  );
}

export default Test;
