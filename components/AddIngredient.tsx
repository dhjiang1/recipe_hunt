'use client'

import { useState } from "react"

interface UserInputProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

const AddIngredient = ({ ingredients, setIngredients }: UserInputProps) => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddEntry = () => {
    if (input !== '') {
      setIngredients([...ingredients, input]);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddEntry();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddEntry}>Add</button>
      </div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddIngredient;