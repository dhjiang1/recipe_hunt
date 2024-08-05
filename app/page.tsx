const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <h1 className="head_text text-center"> 
            Discover NEW Recipes
            <br className="max-md" />
            <span className="text-center"> with what's in your fridge!</span>
        </h1>
        <p className="desc text-center">
            Recipe hunt allows you discover what to cook for your next meal given the ingredients in your own fridge!
        </p>
        
        <a href="search" className="text-white bg-purple-500 hover:bg-purple-800 focus:ring-purple-300 font-medium rounded-lg py-2 px-4">
          Start Cooking
        </a>
    </section>
  )
}

export default Home;