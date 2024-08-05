import { NextApiRequest } from 'next';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { max_number_recipe_results } from '@constants/constants';

// problem with props -> not passing properly

function defineSearchPayload(query: String, num: Number, start: Number) {
  // probably need to add some sort of logic here to determine if they rerun or not
  // leave as is for now
  const payload = {
    key: process.env.GOOGLE_SEARCH_API_KEY,
    q: query,
    cx: process.env.GOOGLE_SEARCH_ENGINE_KEY,
    start: start,
    num: num
  };

  return payload;
}

export async function GET(req: NextRequest) {
  const ingredients = req.nextUrl.searchParams.get('ingredients');

  if (!ingredients) {
    return NextResponse.json({ error: 'Minimum one ingredient is required' }, { status: 400 });
  }

  const query = `recipes containing ${ingredients}`;
  // start can be configured later
  const params = defineSearchPayload(query, 10, 1);

  try {
    const searchResults = await axios.get('https://www.googleapis.com/customsearch/v1', { 
      params: params
    });

    const data = searchResults.data.items;
    console.log(data)
    return NextResponse.json(data , { status: 200 } );
  } catch(error: any) {
    console.error('Error when calling Google Search API: ', error);
    return NextResponse.json({ error: 'Error with getting recipes' }, { status: 500 });
  }
};
