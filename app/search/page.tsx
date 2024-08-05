'use client'

import AddIngredient from "@components/AddIngredient";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const router = useRouter();

	const handleSubmit = () => {
    router.push(`/results?ingredients=${encodeURIComponent(ingredients.join(', '))}`);
  };

  return (
    <div>Search page
      <AddIngredient ingredients={ingredients} setIngredients={setIngredients}/>
			<button onClick={handleSubmit}>Cook</button>
    </div>
  )
}

export default Search;