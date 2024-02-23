import { Footer, Hero, Nav } from "./components";

function App() {

  return(

    <main className="min-h-dvh flex flex-col items-center justify-center font-inter py-[50px]">

      <div className="w-[1400px] max-w-[90%]">

        <Nav/>

        <Hero/>

        <Footer/>

      </div>

    </main>

  )
}

export default App;