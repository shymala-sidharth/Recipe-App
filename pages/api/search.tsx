import axios from "axios";

export default async function handler(req, res) {

  const { NEXT_PUBLIC_RAPIDAPI_KEY } = process.env;

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    timeout: 20000,
    params: {
      query: req.query.keyword,
      diet: req.query.diet,
      excludeIngredients: req.query.exclude,
      number: '20',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host':
				'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			'x-rapidapi-key': NEXT_PUBLIC_RAPIDAPI_KEY
    }
  }

  try {
    let response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error.response);
    
  }

}
