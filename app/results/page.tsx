'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import formatLinks from '@app/helperFunctions/formatLinks';

const Results = () => {
  const [response, setResponse] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const ingredients = searchParams.get('ingredients');

  useEffect(() => {
    if (!ingredients) {
      return;
    }

    const fetchResponse = async () => {
      try {
        const result = await axios.get('/api/search', {
          params: {
            ingredients: ingredients
          }
        });
        setResponse(result.data);
      } catch (error) {
        setResponse(['An error occurred while generating the response.']);
      }
    };

    fetchResponse();
  }, [ingredients]);

  // return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipes</h1>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
      {response.length != 1 ? formatLinks((response.map(r => r.link as unknown as string))) : <p>No recipes with those ingredients</p>}
      </div>
    </div>
  );
}; 

export default Results;
