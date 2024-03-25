import React from 'react';
import '../css/RecipeDetail.css';

function RecipeDetail() {
  return (
    <div className="recipe-detail">
      <h1>Spaghetti Bolognese</h1>
      <div className="recipe-info">
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>500g spaghetti</li>
          <li>400g minced beef</li>
          <li>1 onion, diced</li>
          <li>2 cloves garlic, minced</li>
          <li>400g canned tomatoes</li>
          <li>2 tablespoons tomato paste</li>
          <li>1 teaspoon dried oregano</li>
          <li>Salt and pepper to taste</li>
        </ul>
      </div>
      <div className="recipe-instructions">
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Heat oil in a pan, add onion and garlic, cook until soft.</li>
          <li>Add minced beef, cook until browned.</li>
          <li>Add canned tomatoes, tomato paste, oregano, salt, and pepper. Simmer for 20 minutes.</li>
          <li>Cook spaghetti according to package instructions.</li>
          <li>Serve spaghetti topped with Bolognese sauce.</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;

