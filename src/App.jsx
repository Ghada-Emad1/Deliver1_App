import { Categories } from "./components/Categories"
import { Food } from "./components/Food"
import { HeadLineCards } from "./components/HeadLineCards"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <HeadLineCards/>
     <Food/>
     <Categories/>
    </>
  )
}

export default App
