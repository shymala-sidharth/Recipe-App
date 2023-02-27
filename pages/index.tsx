import { useState } from "react";
import axios from "axios";


export default function Home() {

  const [keyword, setKeyword] = useState<string | undefined>(''); //stores the input recipe names
  let [diet, setDiet] = useState<string | undefined>(''); // stores the diet type
  const [exclude, setExclude] = useState<string | undefined>(''); // stores the excluded ingredients
  const [response, setResponse] = useState<any[]>([]); // stores the response from the API
  const [loading, setLoading] = useState<boolean | undefined>(false); // stores the loading state

  //Get recipes with matching user inputs from the API


async function getRecipes() {
  try {
    diet === 'none' ? (diet = diet) : null; // if the user selects 'none' as the diet, then the diet is set to null
    setLoading(true); // set loading to true
    const response = await axios.get('api/search/', {
      params: {keyword, diet, exclude} // pass the user inputs to the API

    })

    const {data} = response; // get the data from the response. Object destructuring to extract the data from the response object
    setResponse(data.results || []) // stores results in the response state
    console.log(data.results || [])
  }
  catch (error) {
    console.log(error)
  }
}





	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-red-100 font-raleway items-center min-h-screen">
			<h1 className="text-7xl font-bold text-indigo-900 mt-20">
				Spoonacular!
			</h1>
			<h2 className="text-indigo-800 text-2xl font-light mt-5">
				Search recipes from all over the world.
			</h2>

      <form className="sm:max mt-20 md:max-w-4xl  justify-center flex flex-col sm:w-full sm:flex"
      onSubmit={(e) => {
        e.preventDefault();
        getRecipes(); // call the getRecipes function when the form is submitted
        e.stopPropagation();
      }}>
        <input type="text" placeholder="Search for recipes" className="flex w-full placeholder:text-gray-300 rounded-lg shadow-lg shadow-red-300 px-5 py-3 text-center text-xl text-indigo-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-900" onChange={e => {
          setKeyword(e.target.value)
          setResponse([])
        }} />

        <div className="mt-10 flex sm:flex-row flex-col justify-start">
          <div className="sm:w-1/2 w-full">
            <label className="block text-indigo-900 text-xl font-semibold text-center">Diet</label>
            <select className="mt-3 text-center rounded-lg w-full px-5 py-3 text-indigo-900 font-bold focus:outline-none" onChange={e => setDiet(e.target.value)}> {['none', 'vegan', 'vegetarian', 'pescatarian', 'lacto ovo vegetarian', 'paleo', 'primal', 'whole30', 'keto'].map((diet) => {
              return <option key={diet} value={diet}>{diet}</option>
            } )}
            </select>
            </div>

            <div className="sm:ml-20 sm:w-1/2 w-full">
            <label className="block text-indigo-900 text-xl font-semibold text-center">Exclude Ingredients</label>
            <input  type='text' className='mt-3 text-center rounded-lg w-full px-5 py-3 text-indigo-900 font-bold focus:outline-none placeholder:text-gray-300' placeholder="onion" onChange={e => setExclude(e.target.value)}>
            </input>
            </div>
        </div>

            <button className="mt-10 w-full rounded-lg px-5 py-5 bg-indigo-900 text-white font-bold text-lg hover:bg-red-300 transition-colors duration-300 sm:px-10">Search</button>
              </form>

  {response && ( // if the response state is not null, then display the results 

  <div className="mt-10">
    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {response.map(recipe => (
        <div key={recipe.id} className='pt-5'>
          
          <div className="flow-root bg-red-200 rounded-lg px-4 pb-8">
          <div className="text-center justify-center items-center">
            <h3 className="mt-4 text-3xl font-bold w-full break-words overflow-x-auto text-indigo-900 tracking-tight">{recipe.title}</h3>

          </div>
            <span className="p-2">
              <img src={`http://spoonacular.com/recipeImages/` + recipe.image} className='w-full h-full rounded-lg' alt={recipe.id}/>
             </span>

             <div className="text-center justify-center items-center">
            <h2 className="mt-2 text-xl text-indigo-900 block">
              Ready in {recipe.readyInMinutes} minutes </h2>
              <h2 className="mt-2 text-xl text-indigo-900 block">
              Serving {recipe.servings} people </h2>

              <a className="mt-4 text-xl text-indigo-800 block" href={recipe.sourceUrl} target='_blank'>
              <button className="mt-10 w-full rounded-lg px-5 py-5 bg-indigo-900 text-white font-bold text-lg hover:bg-red-300 transition-colors duration-300 sm:px-10">View Recipe</button>

              </a>

          </div>

          </div>
        

        </div>
      ))}
      
      
      </div> 


  </div>
  
  
  )}



		</div>
	);
}


