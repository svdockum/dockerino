import React from 'react';
import './App.css';

const CocktailApp = () => {
  const cocktail = {
    name: "The Dockerino",
    description: "Containerized intoxication.",
    ingredients: [
      { amount: "½", item: "Lime Juice" },
      { amount: "1", item: "Cointreau" },
      { amount: "2", item: "Midori" },
      { amount: "4", item: "Sprite" }
    ]
  };

  return (
    <>
      <div className="scanlines"></div>
      <div className="cyber-card">
        {/* Visual Glitch Title Container */}
        <h1 className="glitch-title" data-text={cocktail.name}>
          {cocktail.name}
        </h1>

        {/* Using a neon green cocktail image. 
           In a real app, replace the src below with your specific asset.
           Midori makes drinks very green!
        */}
       
        <img 
          src="/dockerino.png" 
          alt="The Dockerino Cocktail" 
          className="cocktail-img"
        />

        <div style={{ textAlign: 'left', marginBottom: '10px', color: 'var(--neon-blue)' }}>
          System.status: <span style={{ color: 'var(--neon-green)' }}>ONLINE</span>
        </div>

        <ul className="ingredients-list">
          {cocktail.ingredients.map((ing, index) => (
            <li key={index}>
               <span style={{color: 'var(--neon-pink)'}}>{ing.amount}</span> PARTS :: {ing.item.toUpperCase()}
            </li>
          ))}
        </ul>

        <div style={{ 
          marginTop: '20px', 
          fontSize: '0.8rem', 
          borderTop: '1px solid var(--neon-blue)', 
          paddingTop: '5px' 
        }}>
          // RECIPE_ID_8842
        </div>
      </div>
    </>
  );
};

export default CocktailApp;