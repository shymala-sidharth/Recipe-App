

export default function Home() {
	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-red-100 font-raleway items-center min-h-screen">
			<h1 className="text-7xl font-bold text-indigo-900 mt-20">
				Spoonancular!
			</h1>
			<h2 className="text-indigo-800 text-2xl font-light mt-5">
				Search recipes from all over the world.
			</h2>

      <form className="sm:max mt-20 md:max-w-4xl  justify-center flex flex-col sm:w-full sm:flex"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
        e.stopPropagation();
      }}>
        <input type="text" placeholder="Search for recipes" className="flex w-full placeholder:text-gray-300 rounded-lg shadow-lg shadow-red-300 px-5 py-3 text-center text-xl text-indigo-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-900" />

        <div className="mt-10 flex sm:flex-row flex-col justify-start">
          <div className="sm:w-1/2 w-full">
            <label className="block text-indigo-900 text-xl font-semibold text-center">Diet</label>
            <select className="mt-3 text-center rounded-lg w-full px-5 py-3 text-indigo-900 font-bold focus:outline-none"> {['none', 'vegan', 'vegetarian', 'pescatarian', 'lacto ovo vegetarian', 'paleo', 'primal', 'whole30', 'keto'].map((diet) => {
              return <option key={diet} value={diet}>{diet}</option>
            } )}
            </select>
            </div>

            <div className="sm:ml-20 sm:w-1/2 w-full">
            <label className="block text-indigo-900 text-xl font-semibold text-center">Exclude Ingredients</label>
            <input  type='text' className='mt-3 text-center rounded-lg w-full px-5 py-3 text-indigo-900 font-bold focus:outline-none placeholder:text-gray-300' placeholder="onion">
            </input>
            </div>
        </div>

            <button className="mt-10 w-full rounded-lg px-5 py-5 bg-indigo-900 text-white font-bold text-lg hover:bg-red-300 transition-colors duration-300 sm:px-10" >Search</button>
        




console.log('form submitted')
      </form>



		</div>
	);
}


