import { Footer, Hero, Nav } from "./components";

function App() {

  return(

    <main className="border-4 border-red-500 min-h-dvh flex flex-col items-center justify-center font-inter">

      <div className="border-4 border-green-500 w-[1400px] max-w-[85%]">

        <Nav/>

        <Hero/>

        <Footer/>

      </div>

    </main>

  )
}

export default App;